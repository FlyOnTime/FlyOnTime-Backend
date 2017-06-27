import {Observable} from "@reactivex/rxjs";

export class DecoratorPlayground {

    @GET(false)
    getSchipholFlightDataRx(airlineCode, flightNumber, originFlightDate): Observable<any> {

        const URL: string = "https://api-acc.schiphol.nl/public-flights/flights";

        return Observable.fromEvent(
            client.get(
                URL,
                {
                    headers: {ResourceVersion: "v3"},
                    parameters: { app_id: "a5ce65e3", app_key: "34e2fc05aed1f047beeedb6c629972c1", flightname: airlineCode + flightNumber, scheduleDate: originFlightDate}
                }
            ),
            "receiveData"
        );
    }

    @GET(false)
    doStuff(): void {

    }

}

export interface DecoratorPlaygroundInterface {
    //@GET(false)
    doStuffInterface();
}

function GET(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(descriptor);
        descriptor.configurable = value;
    }
}