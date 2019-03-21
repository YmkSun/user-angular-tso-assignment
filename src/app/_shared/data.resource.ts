import { Injectable } from '@angular/core';
@Injectable()
export class DataResource {
    _title: string = '';
    _profileName: string = '';
    _activeRoute: string = '';
    _userId: string = '7eac8da9-9015-47a6-b74c-a27f552901ab';
    _scrollYIndex: number = 0;
    _currentPageSize: number = 0;
    _headerSrch: string = '';
    _datepickerOpts: any = {
        autoclose: true,
        todayBtn: 'linked',
        todayHighlight: true,
        assumeNearbyYear: true,
        placeholder: 'dd/mm/yyyy',
        format: 'dd/mm/yyyy'
    };

    getUserId() {
        return this._userId;
    }

    _rptDateRanges = [
        { id: 0, value: 'lifetime', caption: 'Lifetime', selected: false },
        { id: 1, value: 'last_month', caption: 'Last month', selected: false },
        { id: 2, value: 'this_month', caption: 'This month', selected: false },
        { id: 3, value: 'today', caption: 'Today', selected: false },
        { id: 4, value: 'custom', caption: 'Custom', selected: false }
    ]
    getRptDateRanges() {
        return this._rptDateRanges;
    }
    
}
