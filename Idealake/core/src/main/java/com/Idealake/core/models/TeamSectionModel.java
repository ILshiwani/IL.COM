package com.Idealake.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.annotation.PostConstruct;

import javax.inject.Inject;


@Model(adaptables = Resource.class)
public class TeamSectionModel {

    private static final Logger LOGGER = LoggerFactory.getLogger(TeamSectionModel.class);

    @Inject
    @Optional
    public Resource section;

}