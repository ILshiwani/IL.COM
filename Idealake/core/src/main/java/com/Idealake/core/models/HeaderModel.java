package com.Idealake.core.models;
import lombok.Getter;
import lombok.Setter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import javax.inject.Inject;
import java.util.List;

@Getter
@Setter
@Model(adaptables = SlingHttpServletRequest.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class HeaderModel {

    @SlingObject
    SlingHttpServletRequest slingRequest;

    @Inject
    @Via("resource")
    @Getter
    public List<Header> navbar;

    @Inject
    @Getter
    @Via("resource")
    public String logo;

    @Inject
    @Getter
    @Via("resource")
    public String ctaText;

    @Inject
    @Getter
    @Via("resource")
    public String ctaLink;

}
