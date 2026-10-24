(function (_0x385704, _0xc6b079) {
    const _0x423ec6 = a0_0x3045, _0x8738ba = _0x385704();
    while (!![]) {
        try {
            const _0x1dc84d = parseInt(_0x423ec6(0x1aa)) / 0x1 * (parseInt(_0x423ec6(0x1b2)) / 0x2) + parseInt(_0x423ec6(0x1ae)) / 0x3 + parseInt(_0x423ec6(0x1a8)) / 0x4 * (parseInt(_0x423ec6(0x1ab)) / 0x5) + -parseInt(_0x423ec6(0x1a3)) / 0x6 + parseInt(_0x423ec6(0x1ad)) / 0x7 * (parseInt(_0x423ec6(0x1b0)) / 0x8) + parseInt(_0x423ec6(0x1a4)) / 0x9 + -parseInt(_0x423ec6(0x1af)) / 0xa;
            if (_0x1dc84d === _0xc6b079)
                break;
            else
                _0x8738ba['push'](_0x8738ba['shift']());
        } catch (_0x259a8a) {
            _0x8738ba['push'](_0x8738ba['shift']());
        }
    }
}(a0_0x190d, 0xd27fb));
function a0_0x190d() {
    const _0x3b3b24 = [
        'searchPanel',
        '914mmKGBx',
        'context',
        '3660918ImZiRn',
        '7771410eHqiyf',
        'show_search_panel',
        'type',
        'allowSelectors',
        '4ubpCMK',
        'viewProps',
        '692mHIXZg',
        '1804200zcZnpK',
        'display',
        '14FkaiPz',
        '3901068qUycln',
        '30111560aoEsRt',
        '6570328lfrMmt'
    ];
    a0_0x190d = function () {
        return _0x3b3b24;
    };
    return a0_0x190d();
}
import { SelectCreateDialog } from '@web/views/view_dialogs/select_create_dialog';
function a0_0x3045(_0x4ee611, _0x48c81d) {
    const _0x190dd3 = a0_0x190d();
    return a0_0x3045 = function (_0x3045ab, _0x4c085f) {
        _0x3045ab = _0x3045ab - 0x1a2;
        let _0x4a4165 = _0x190dd3[_0x3045ab];
        return _0x4a4165;
    }, a0_0x3045(_0x4ee611, _0x48c81d);
}
import { patch } from '@web/core/utils/patch';
patch(SelectCreateDialog['prototype'], {
    get 'viewProps'() {
        const _0x81a8a7 = a0_0x3045;
        let _0x387a99 = super[_0x81a8a7(0x1a9)];
        return _0x387a99['context']?.['view_mode'] === 'kanban' && ('allowSelectors' in _0x387a99 && delete _0x387a99[_0x81a8a7(0x1a7)], _0x387a99[_0x81a8a7(0x1a6)] = 'kanban'), _0x387a99[_0x81a8a7(0x1ac)][_0x81a8a7(0x1b1)] = _0x387a99[_0x81a8a7(0x1ac)][_0x81a8a7(0x1b1)] || _0x387a99[_0x81a8a7(0x1a2)][_0x81a8a7(0x1a5)], _0x387a99;
    }
});