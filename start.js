// Copyright 2017 The Appgineer
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";

const MANAGER_INDEX = 0;

var ApiExtensionInstaller = require('node-api-extension-installer');

var installer = new ApiExtensionInstaller({
    repository_changed: function(values) {
        installer.start(MANAGER_INDEX);

        console.log("\nRoon Extension Manager started successfully!\n" +
                    "Select Settings->Extensions on your Roon Remote to manage your extensions.\n");
    }
}, process.argv[2]);
