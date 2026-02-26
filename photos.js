/* ============================================================
   SMOOTH SPORTS GEAR — PHOTO CONFIGURATION
   ============================================================

   HOW TO USE:
   1. Drop your photo into the images/gallery/ folder
   2. Find the slot you want to change below
   3. Replace the filename in quotes with your new filename
   4. Save this file — the website updates automatically

   File names are case-sensitive. Match spelling and
   capitalization exactly.

   ============================================================ */

const SITE_PHOTOS = {

  /* ----------------------------------------------------------
     HERO BACKGROUND
     The large photo behind the main headline.
  ---------------------------------------------------------- */
  hero_background: 'gemini point arena.png',


  /* ----------------------------------------------------------
     OUR STORY SECTION
  ---------------------------------------------------------- */
  story_portrait: 'tom illife hero shot.jpeg',   // Tom's main photo

  story_grid: [                                   // 4 photos below portrait
    'point arena pirates van.jpg',               // top-left
    'football.jpg',                              // top-right
    'pirates team photo.jpg',                    // bottom-left
    'smooth baseball team.jpg',                  // bottom-right
  ],


  /* ----------------------------------------------------------
     GALLERY
     First entry is the large featured photo (2x size).
     Add or remove entries to show more or fewer photos.
  ---------------------------------------------------------- */
  gallery: [
    { file: 'Gualala_Supermarket_Falcons.jpg',  caption: 'Gualala Supermarket Falcons'    },
    { file: 'north pacific adventure.jpg',       caption: 'North Pacific Adventure'        },
    { file: 'gunners.jpg',                       caption: 'The Gunners'                    },
    { file: 'dante 2.jpg',                       caption: 'Dante'                          },
    { file: 'barnstable.jpg',                    caption: 'Barnstable'                     },
    { file: 'Coast Youth.jpg',                   caption: 'Coast Youth Little League'      },
    { file: 'south coast youth orange.jpg',      caption: 'South Coast Youth Soccer Club'  },
    { file: 'litle_league_banner.jpg',           caption: 'Little League Field'            },
    { file: 'whitecaps_construction.jpg',        caption: 'Whitecaps Construction'         },
  ],

};
