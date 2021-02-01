/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.controller;

import com.vividsolutions.jts.geom.Coordinate;
import com.vividsolutions.jts.util.GeometricShapeFactory;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.easypay.easypay.dao.repository.CommercianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author simo
 */
@Controller
@RequestMapping("/map")
public class MapController implements ErrorHandlingController, SelfHandlingController {

    @Autowired
    private CommercianteRepository commercianteRepository;

    @GetMapping("")
    public ModelAndView loadMap(
            @RequestParam(required = true) double lat,
            @RequestParam(required = true) double lon
    ) {
        GeometricShapeFactory shapeFactory = new GeometricShapeFactory();
        shapeFactory.setNumPoints(32);
        shapeFactory.setCentre(new Coordinate(lat, lon));
        shapeFactory.setSize(20000);
        List<CoordinateModel> points = commercianteRepository.findByPointIsWithin(shapeFactory.createCircle())
                .stream()
                .map(x -> new CoordinateModel(x.getPoint().getX(), x.getPoint().getY(), x.getRagSoc()))
                .collect(Collectors.toList());
        return new ModelAndView("map", "model", new MapModel(new CoordinateModel(lat, lon, "Me"), points));
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MapModel {

        private CoordinateModel self;
        private List<CoordinateModel> points;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class CoordinateModel {

        private double lat;
        private double lon;
        private String name;
    }

}
