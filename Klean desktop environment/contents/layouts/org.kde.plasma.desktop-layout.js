var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1600x900": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/skynixty/Downloads/wallhaven-6lpkl7_3840x2160.png",
                    "SlidePaths": "/nix/store/scw1habi2r661hn1l04440jg9pz6ghi4-breeze-6.6.5/share/wallpapers/,/run/current-system/sw/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1280x1024": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/skynixty/Downloads/wallhaven-6lpkl7_3840x2160.png",
                    "SlidePaths": "/nix/store/scw1habi2r661hn1l04440jg9pz6ghi4-breeze-6.6.5/share/wallpapers/,/run/current-system/sw/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "popupHeight": "505",
                            "popupWidth": "647"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "favoritesDisplay": "1",
                            "favoritesPortedToKAstats": "true",
                            "icon": "nix-snowflake-white",
                            "primaryActions": "1",
                            "systemFavorites": "lock-screen\\,logout\\,save-session\\,switch-user"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "iconSpacing": "0",
                            "launchers": "preferred://filemanager,preferred://browser,file:///nix/store/z8qpd26n6lfnyswrpkjshh8iz5ln1r52-system-path/share/applications/discord.desktop,file:///nix/store/z8qpd26n6lfnyswrpkjshh8iz5ln1r52-system-path/share/applications/spotify.desktop,applications:com.mitchellh.ghostty.desktop",
                            "wheelEnabled": "AllTask"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 3.6666666666666665,
            "hiding": "dodgewindows",
            "location": "bottom",
            "maximumLength": 88.88888888888889,
            "minimumLength": 88.88888888888889,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "formfactor": "0",
                            "immutability": "1",
                            "lastScreen": "-1",
                            "popupHeight": "432",
                            "popupWidth": "432",
                            "wallpaperplugin": "org.kde.image"
                        },
                        "/General": {
                            "extraItems": "org.kde.plasma.manage-inputmethod,org.kde.plasma.clipboard,org.kde.plasma.devicenotifier,org.kde.plasma.cameraindicator,org.kde.plasma.mediacontroller,org.kde.plasma.notifications,org.kde.plasma.battery,org.kde.plasma.keyboardlayout,org.kde.kscreen,org.kde.plasma.keyboardindicator,org.kde.plasma.printmanager,org.kde.plasma.volume,org.kde.plasma.networkmanagement,org.kde.plasma.weather,org.kde.plasma.brightness",
                            "knownItems": "org.kde.plasma.manage-inputmethod,org.kde.plasma.clipboard,org.kde.plasma.devicenotifier,org.kde.plasma.cameraindicator,org.kde.plasma.mediacontroller,org.kde.plasma.notifications,org.kde.plasma.battery,org.kde.plasma.keyboardlayout,org.kde.kscreen,org.kde.plasma.keyboardindicator,org.kde.plasma.printmanager,org.kde.plasma.volume,org.kde.plasma.networkmanagement,org.kde.plasma.weather,org.kde.plasma.brightness"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "fontWeight": "400",
                            "showDate": "false",
                            "use24hFormat": "2"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "actionsOrder": "lockScreen,switchUser,requestShutDown,requestReboot,requestLogout,suspendToRam,suspendToDisk,requestLogoutScreen",
                            "show_lockScreen": "false",
                            "show_requestReboot": "true",
                            "show_requestShutDown": "true",
                            "show_suspendToDisk": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.lock_logout"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/General": {
                            "expanding": "false",
                            "length": "3"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/General": {
                            "expanding": "false",
                            "length": "3"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/General": {
                            "expanding": "false",
                            "length": "3"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 2,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 88.88888888888889,
            "minimumLength": 88.88888888888889,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
