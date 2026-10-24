# -*- coding: utf-8 -*-
{
    'name': 'YLHC Select Create Dialog with Kanban',
    'version': '19.0.1.0.0',
    'category': 'Web',
    'summary': 'Show the SelectCreateDialog as a kanban and/or with a search panel, via context',
    'description': """
        YLHC Select Create Dialog with Kanban
        ======================================

        A lightweight front-end patch of Odoo's standard SelectCreateDialog that adds
        two opt-in context switches:

        * context={'view_mode': 'kanban'}  -> render the dialog as image-rich cards
          instead of a list, even on a desktop screen.
        * context={'show_search_panel': True} -> reveal the filters / favourites /
          group-by search panel inside the dialog.

        Both flags can be combined. Without them the dialog behaves exactly like the
        native one. No models, no views, no data - a single OWL patch().
    """,
    'author': 'ylhctec',
    'website': 'https://www.ylhctec.com',
    'live_test': 'https://www.ylhctec.com',
    'depends': ['web', 'base'],
    'images': [
        'static/description/banner.png',
        'static/description/description.png',
        'static/description/ill_before_after.png',
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