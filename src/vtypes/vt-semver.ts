/// <reference path="../../typings/main.d.ts" />

import * as semver from "semver";

export default function (version: string, release: string, tag?: string): string {
    return semver.inc(version, release, tag);
}
