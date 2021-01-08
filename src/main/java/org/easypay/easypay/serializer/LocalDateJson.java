/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.serializer;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.Date;
import org.springframework.boot.jackson.JsonComponent;

/**
 *
 * @author simo
 */
@JsonComponent
public class LocalDateJson {

    public static class LocalDateSerializer
            extends JsonSerializer<LocalDate> {

        @Override
        public void serialize(LocalDate localDate, JsonGenerator jsonGenerator,
                SerializerProvider serializerProvider) throws IOException,
                JsonProcessingException {
            Date date = new Date(localDate.atStartOfDay().toInstant(ZoneOffset.UTC).toEpochMilli());
            jsonGenerator.writeObject(date);
        }

    }

    public static class UserJsonDeserializer
            extends JsonDeserializer<LocalDate> {

        @Override
        public LocalDate deserialize(JsonParser jsonParser,
                DeserializationContext deserializationContext)
                throws IOException, JsonProcessingException {

            Date date = jsonParser.getCodec().readValue(jsonParser, Date.class);
            return LocalDateTime.ofInstant(date.toInstant(), ZoneId.of("UTC")).toLocalDate();
        }
    }

}
