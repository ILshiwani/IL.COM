/*
 *  Copyright 2015 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package com.Idealake.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

import javax.inject.Inject;

@Model(adaptables=Resource.class)
public class ClientsListModel {

    @Inject
    @Optional
    public Resource products1;
    @Inject
    @Optional
    public Resource products2;
    @Inject
    @Optional
    public Resource products3;
    @Inject
    @Optional
    public Resource products4;
    @Inject
    @Optional
    public Resource products5;
    @Inject
    @Optional
    public Resource products6;
    @Inject
    @Optional
    public Resource products7;
    @Inject
    @Optional
    public Resource products8;
    @Inject
    @Optional
    public Resource products9;
    @Inject
    @Optional
    public Resource products10;
    @Inject
    @Optional
    public Resource products11;
}
