# -*- coding: utf-8 -*-
{
    'name': 'YLHC Select Create Dialog with Kanban',
    'version': '18.0.1.0.0',
    'category': 'Web',
    'summary': 'Extends SelectCreateDialog to support kanban views based on context',
    'description': """
        YLHC Select Create Dialog with Kanban
    """,
    'author': 'ylhctec',
    'website': 'https://www.ylhctec.com',
    'depends': ['web'],
    'images': [
        'static/description/kanban.png',
    ],
    'data': [],
    'assets': {
        'web.assets_backend': [
            'ylhc_select_create_dialog/static/src/select_create_dialog.js',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
} 