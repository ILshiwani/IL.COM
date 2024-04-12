package com.Idealake.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

import javax.inject.Inject;


@Model(adaptables = Resource.class)
public class TestimonialVariationModel {

    @Inject
    @Optional
    public Resource testimonialCards;

    @Inject
    @Optional
    public Resource bgIcons;

}