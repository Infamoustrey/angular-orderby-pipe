import { Pipe, PipeTransform } from "@angular/core";

/*
 * Orders the values in an array by a specified key
 */
@Pipe({ name: "orderBy" })
export class OrderbyPipe implements PipeTransform {
    transform(value: Array<any>, key: string, reverse: boolean): Array<any> {
        const sorted = value.sort((a, b) => {
            if (!reverse) {
                if (a[key] > b[key]) {
                    return 1;
                } else if (a[key] < b[key]) {
                    return -1;
                } else {
                    return 0;
                }
            } else {
                if (a[key] < b[key]) {
                    return 1;
                } else if (a[key] > b[key]) {
                    return -1;
                } else {
                    return 0;
                }
            }
        });

        return sorted;
    }
}

