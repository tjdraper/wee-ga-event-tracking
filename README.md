# GA Event Tracking for Wee 2.x

Wee Module for tracking events in Google Analytics.

## Quick Start

This module is made for [Wee](http://www.weepower.com) and assumes you are already up and running with Wee.

To use this module, create a directory called `ga-event-tracking` in Wee's `"modules"` directory and drop the contents of this repository in that directory.

## Using

Any element with a `data-ref` attribute of `gaTrackEvent` will automatically be tracked. Forms will be tracked on submit, any other element will be tracked on click.

Each element must have three data attributes:

- `data-category="My Category"`
- `data-action="My Action"`
- `data-label="My Label"`

If you wish to track an element that does not have a `data-ref` of `gaTrackEvent`, or you would like to track a dynamically added element, you can chain off a DOM object like so:

```
$('.myElement').gaTracking();
```

or you can call the controller directly and send it a selector or DOM object.

```
Wee.gaTracking.init('.myElement');
```

## License

Copyright 2015 [BuzzingPixel](https://buzzingpixel.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.