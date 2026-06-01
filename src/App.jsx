import { useState, useEffect, useCallback, createContext, useContext } from "react";
import { img } from "./images";
import {
  GUIDE_PDF, GUIDE_MD,
  MASTER_LOGO_PACKAGE, LOGO_USAGE_GUIDE, ALL_PROGRAM_LOGOS, ALL_FACILITY_LOGOS,
  LOGOS, ICONS, LETTERHEAD,
  logoDownloadUrl, iconDownloadUrl, letterheadUrl,
  BD_DECK_PPTX, BD_DECK_SLIDES,
  HUB, PRINT_ORDER, PRINT_ALT_VENDOR,
  SOCIAL_TEMPLATES, EMAIL_TEMPLATES, VIDEO_FILES,
} from "./links";

var C = {
  mid: "#004860",
  pru: "#083045",
  gam: "#FFAD00",
  cer: "#00728B",
  pac: "#5B9CB8",
  sag: "#4B8C84",
  cad: "#A0B5BD",
  fro: "#FCFDFF",
  she: "#FAFAF9",
  smo: "#F2F1F0",
  san: "#E2E0DD",
  gla: "#D3E7EE",
  eer: "#212322",
  cav: "#474646",
  bat: "#97999B",
  c50: "#E0F0F4",
  c2: "#9DD3DF",
  c4: "#4DABC2",
  c7: "#005368",
  c9: "#003A49",
  p50: "#EAF3F7",
  p2: "#BCDAE6",
  p4: "#88BFCF",
  p7: "#4280A0",
  p9: "#2E5F78",
  s50: "#E4F0EE",
  s2: "#A8D4CC",
  s4: "#6FB8AB",
  s7: "#366861",
  s9: "#2D5C54",
};

var SECS = [
  ["hero", "Overview", null],
  ["story", "1. Brand Story", "I"],
  ["voice", "2. Voice", "I"],
  ["arch", "3. Architecture", "I"],
  ["svc", "4. Service Lines", "I"],
  ["logo", "5. Logos", "II"],
  ["color", "6. Color", "II"],
  ["typo", "7. Typography", "II"],
  ["icon", "8. Iconography", "II"],
  ["photo", "9. Photography", "II"],
  ["gfx", "10. Graphics", "II"],
  ["fac", "11. Facility", "III"],
  ["bd", "12. BD Resources", "III"],
  ["exec", "13. Executive Resources", "III"],
  ["dig", "14. Digital", "III"],
  ["print", "15. Print", "III"],
  ["hub", "Asset Hub", null],
  ["app", "Appendices", null],
];

var PL = {
  I: "Brand Foundation",
  II: "Visual Identity",
  III: "Application Guide",
};

// FACS: [shortName, city, region, services, hasGRPrefix, fullProgramName]
var FACS = [
  [
    "Immersion Residential",
    "Boynton Beach, FL",
    "Florida",
    "Detox, Residential",
    true,
    "Guardian Recovery - Immersion Residential",
  ],
  [
    "Immersion Outpatient",
    "Delray Beach, FL",
    "Florida",
    "PHP, SUD IOP, MH IOP, Virtual OP",
    true,
    "Guardian Recovery - Immersion Outpatient",
  ],
  [
    "Princeton Detox & Recovery Center",
    "Monmouth Jct, NJ",
    "New Jersey",
    "Detox, Residential, Virtual OP",
    true,
    "Guardian Recovery - Princeton Detox & Recovery Center",
  ],
  [
    "Princeton Psychiatry & Counseling",
    "Princeton, NJ",
    "New Jersey",
    "MH IOP, MH OP",
    true,
    "Guardian Recovery - Princeton Psychiatry & Counseling",
  ],
  [
    "New Pathway Bayonne",
    "Bayonne, NJ",
    "New Jersey",
    "SUD IOP, MH IOP, Adol IOP, Virtual",
    true,
    "Guardian Recovery - New Pathway Bayonne",
  ],
  [
    "New Pathway Pine Brook",
    "Pine Brook, NJ",
    "New Jersey",
    "SUD IOP, MH IOP, Adol IOP, Virtual",
    true,
    "Guardian Recovery - New Pathway Pine Brook",
  ],
  [
    "Hoboken Counseling Center",
    "Hoboken, NJ",
    "New Jersey",
    "SUD IOP, MH IOP, Virtual",
    true,
    "Guardian Recovery - Hoboken Counseling Center",
  ],
  [
    "New Brunswick Counseling Center",
    "New Brunswick, NJ",
    "New Jersey",
    "SUD IOP, MH IOP, Virtual",
    true,
    "Guardian Recovery - New Brunswick Counseling Center",
  ],
  [
    "Saddle Brook Counseling Center",
    "Saddle Brook, NJ",
    "New Jersey",
    "SUD IOP, MH IOP, Virtual",
    true,
    "Guardian Recovery - Saddle Brook Counseling Center",
  ],
  [
    "Montville Adolescent Center",
    "Towaco, NJ",
    "New Jersey",
    "Adolescent Detox, Residential",
    true,
    "Guardian Recovery - Montville Adolescent Center",
  ],
  [
    "Pine Tree",
    "Portland, ME",
    "New England",
    "Detox, Residential, PHP, SUD IOP, Virtual",
    true,
    "Guardian Recovery - Pine Tree",
  ],
  [
    "Portland Psychiatry & Counseling",
    "S. Portland, ME",
    "New England",
    "MH PHP, MH IOP, Virtual",
    false,
    "Portland Psychiatry & Counseling",
  ],
  [
    "Plymouth House",
    "Plymouth, NH",
    "New England",
    "Detox, Residential, PHP, Virtual",
    true,
    "Guardian Recovery - Plymouth House",
  ],
  [
    "Portland Addiction Center",
    "Westbrook, ME",
    "New England",
    "Residential Supportive Housing",
    true,
    "Guardian Recovery - Portland Addiction Center",
  ],
  [
    "CuraWest",
    "Denver, CO",
    "Colorado",
    "Detox, Residential, Virtual",
    true,
    "Guardian Recovery - CuraWest",
  ],
  [
    "Dallas Addiction Center",
    "Plano, TX",
    "Texas",
    "Detox, Residential, Virtual",
    true,
    "Guardian Recovery - Dallas Addiction Center",
  ],
  [
    "Virtual Counseling Maine",
    "Maine",
    "Virtual",
    "IOP, MH IOP, OP, MH OP",
    true,
    "Guardian Recovery - Virtual Counseling Maine",
  ],
  [
    "Virtual Counseling Colorado",
    "Colorado",
    "Virtual",
    "IOP, MH IOP, OP, MH OP",
    true,
    "Guardian Recovery - Virtual Counseling Colorado",
  ],
  [
    "Virtual Counseling Florida",
    "Florida",
    "Virtual",
    "IOP, MH IOP, OP, MH OP",
    true,
    "Guardian Recovery - Virtual Counseling Florida",
  ],
  [
    "Virtual Counseling New Jersey",
    "New Jersey",
    "Virtual",
    "IOP, MH IOP, OP, MH OP",
    true,
    "Guardian Recovery - Virtual Counseling New Jersey",
  ],
  [
    "Virtual Counseling Texas",
    "Texas",
    "Virtual",
    "IOP, MH IOP, OP, MH OP",
    true,
    "Guardian Recovery - Virtual Counseling Texas",
  ],
];

var REGIONS = [
  "All",
  "Florida",
  "New Jersey",
  "New England",
  "Colorado",
  "Texas",
  "Virtual",
];

// Module-level preview opener — set by App, used by nested components
var _openPreview = function () {};

// Display image resolver — uses src/assets via Vite (hashed, cache-busted)
// For logo previews, always shows the SVG from src/assets
function logoPreview(slug) {
  return img("logos/" + slug + ".svg");
}

// Download URL resolver — uses links.js (Google Drive or external URLs)
// Falls back to empty string if not yet configured
function logoDownload(slug, fmt) {
  return logoDownloadUrl(slug, fmt);
}

// Icon download resolver
function iconDownload(slug, fmt) {
  return iconDownloadUrl(slug, fmt);
}

function slugify(name) {
  return (
    "fac-" +
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  );
}

function previewSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function PreviewModal(props) {
  if (!props.open) return null;
  var imgPath = img("previews/" + previewSlug(props.title) + ".jpg");
  return (
    <div
      onClick={props.onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "rgba(8,48,69,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        cursor: "pointer",
      }}
    >
      <div
        onClick={function (e) {
          e.stopPropagation();
        }}
        style={{
          background: C.fro,
          borderRadius: 14,
          maxWidth: 640,
          width: "100%",
          maxHeight: "90vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          cursor: "default",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 18px",
            borderBottom: "1px solid " + C.gla,
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 600, color: C.mid }}>
            {props.title}
          </div>
          <button
            onClick={props.onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: 18,
              color: C.bat,
              cursor: "pointer",
              padding: "0 4px",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
        <div style={{ padding: 18, overflowY: "auto", textAlign: "center" }}>
          <img
            src={imgPath}
            alt={props.title + " preview"}
            style={{
              maxWidth: "100%",
              maxHeight: "65vh",
              borderRadius: 8,
              objectFit: "contain",
            }}
            onError={function (e) {
              e.target.style.display = "none";
              e.target.parentNode.insertAdjacentHTML(
                "beforeend",
                "<div style='padding:40px 20px;color:" +
                  C.bat +
                  ";font-size:13px;'>Preview image not yet available.<br/>Expected: " +
                  imgPath +
                  "</div>",
              );
            }}
          />
        </div>
        <div
          style={{
            padding: "12px 18px",
            borderTop: "1px solid " + C.gla,
            display: "flex",
            gap: 8,
            justifyContent: "flex-end",
          }}
        >
          <a
            href={imgPath}
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontSize: 13,
              color: "#fff",
              background: C.cer,
              textDecoration: "none",
              fontWeight: 500,
              padding: "7px 14px",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Download Preview
          </a>
          <button
            onClick={props.onClose}
            style={{
              fontSize: 13,
              color: C.cav,
              background: "transparent",
              border: "1px solid " + C.gla,
              borderRadius: 6,
              padding: "7px 14px",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Bx(props) {
  if (props.img) {
    return (
      <div
        style={{
          width: props.w || "100%",
          borderRadius: 8,
          overflow: "hidden",
          background: props.dark ? C.mid : "#fff",
          display: "block",
        }}
      >
        <img
          src={props.img}
          alt={props.t || ""}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    );
  }
  return (
    <div
      style={{
        width: props.w || "100%",
        height: props.h || 60,
        background: props.dark ? C.mid : "#fff",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: props.dark ? "none" : "1px dashed " + C.gla,
      }}
    >
      <span style={{ fontSize: 10, color: props.dark ? C.cad : C.bat }}>
        {props.t}
      </span>
    </div>
  );
}

function Sw(props) {
  var b =
    props.hex === C.fro || props.hex === C.smo ? "1px solid " + C.gla : "none";
  return (
    <div
      style={{
        background: props.hex,
        borderRadius: 8,
        padding: "12px 10px 8px",
        minWidth: 70,
        flex: "1 1 70px",
        border: b,
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 500,
          color: props.light ? "#fff" : C.mid,
        }}
      >
        {props.name}
      </div>
      {props.sub && (
        <div
          style={{
            fontSize: 10,
            color: props.light ? C.cad : C.bat,
            marginTop: 1,
          }}
        >
          {props.sub}
        </div>
      )}
      <div
        style={{
          fontSize: 9,
          fontFamily: "monospace",
          color: props.light ? C.cad : C.bat,
          marginTop: 3,
        }}
      >
        {props.hex}
      </div>
    </div>
  );
}

function Bt(props) {
  var v = props.v || "default";
  var bg =
    v === "primary"
      ? C.gam
      : v === "order"
        ? C.cer
        : v === "preview"
          ? C.pru
          : "transparent";
  var fg =
    v === "primary" ? C.mid : v === "order" || v === "preview" ? "#fff" : C.cer;
  var bd =
    v === "primary" || v === "order" || v === "preview"
      ? "none"
      : "1px solid " + C.cer;
  var href = props.href || "#";
  var dl = props.href && !props.oc;
  return (
    <a
      href={href}
      download={dl ? true : undefined}
      onClick={
        !props.href
          ? function (e) {
              e.preventDefault();
              if (props.oc) props.oc();
              else alert("Link coming soon.");
            }
          : props.oc
            ? function (e) {
                e.preventDefault();
                props.oc();
              }
            : undefined
      }
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontSize: 13,
        color: fg,
        background: bg,
        textDecoration: "none",
        fontWeight: 500,
        padding: "7px 14px",
        border: bd,
        borderRadius: 6,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {props.children}
    </a>
  );
}

function Tb(props) {
  return (
    <div style={{ overflowX: "auto", marginBottom: 16 }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
      >
        <thead>
          <tr>
            {props.h.map(function (x, i) {
              return (
                <th
                  key={i}
                  style={{
                    textAlign: "left",
                    padding: "8px 10px",
                    borderBottom: "2px solid " + C.gla,
                    color: C.mid,
                    fontWeight: 600,
                  }}
                >
                  {x}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.r.map(function (row, ri) {
            return (
              <tr key={ri} style={{ borderBottom: "1px solid " + C.gla }}>
                {row.map(function (c, ci) {
                  return (
                    <td
                      key={ci}
                      style={{
                        padding: "8px 10px",
                        color: C.cav,
                        verticalAlign: "top",
                        lineHeight: 1.5,
                      }}
                    >
                      {c}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Cd(props) {
  return (
    <div
      style={{
        border: "1px solid " + C.gla,
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 12,
      }}
    >
      {props.ac && <div style={{ height: 4, background: props.ac }} />}
      <div style={{ padding: "14px 18px" }}>
        {props.t && (
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: props.ac || C.mid,
              marginBottom: props.sub ? 2 : 6,
            }}
          >
            {props.t}
          </div>
        )}
        {props.sub && (
          <div
            style={{
              fontFamily: "'DM Serif Text',serif",
              fontSize: 16,
              color: C.mid,
              fontStyle: "italic",
              marginBottom: 8,
            }}
          >
            {props.sub}
          </div>
        )}
        <div style={{ fontSize: 13, color: C.cav, lineHeight: 1.6 }}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

function Pc(props) {
  var uniqueName = props.d ? props.t + " " + props.d : props.t;
  var previewImg =
    props.img || img("previews/" + previewSlug(uniqueName) + ".jpg");
  return (
    <div
      style={{
        border: "1px solid " + C.gla,
        borderRadius: 10,
        overflow: "hidden",
        flex: "1 1 190px",
        minWidth: 190,
      }}
    >
      <Bx t="Preview" h={90} img={previewImg} />
      <div style={{ padding: "10px 12px" }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: C.mid,
            marginBottom: 2,
          }}
        >
          {props.t}
        </div>
        <div style={{ fontSize: 11, color: C.bat, marginBottom: 8 }}>
          {props.d}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <Bt
            v="preview"
            oc={function () {
              _openPreview(uniqueName);
            }}
          >
            Preview
          </Bt>
          <Bt v="order">Order</Bt>
        </div>
      </div>
    </div>
  );
}

function LogoDownload(props) {
  var [fmt, setFmt] = useState("Vector Web");
  var fmts = props.dark
    ? ["Vector Web", "Web No BG", "Vector Print", "Print"]
    : ["Vector Web", "Web", "Web No BG", "Vector Print", "Print"];
  var activeFmt = fmts.indexOf(fmt) === -1 ? "Vector Web" : fmt;
  var slug = props.slug || "";
  var dlHref = slug ? logoDownload(slug, activeFmt) : null;
  var previewImg = slug ? logoPreview(slug) : props.img;
  var flexBasis = "1 1 150px";
  var minW = 150;
  if (props.cols === 2) {
    flexBasis = "1 1 calc(50% - 5px)";
    minW = 240;
  }
  return (
    <div
      style={{
        border: "1px solid " + C.gla,
        borderRadius: 10,
        overflow: "hidden",
        flex: flexBasis,
        minWidth: minW,
      }}
    >
      {props.ac && <div style={{ height: 3, background: props.ac }} />}
      <div style={{ padding: 14, textAlign: "center" }}>
        <div
          style={{
            margin: "14px 0 18px",
            border: "1px solid " + (props.dark ? "rgba(255,255,255,0.12)" : C.gla),
            borderRadius: 9,
            overflow: "hidden",
          }}
        >
          <Bx
            t={props.n + (props.dark ? " (white)" : "")}
            h={props.vertical ? 60 : 44}
            dark={props.dark}
            img={previewImg}
          />
        </div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: C.mid,
            margin: "8px 0 8px",
          }}
        >
          {props.n}
        </div>
        <div
          style={{
            display: "flex",
            gap: 6,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <select
            value={activeFmt}
            onChange={function (e) {
              setFmt(e.target.value);
            }}
            style={{
              fontSize: 11,
              padding: "4px 6px",
              borderRadius: 5,
              border: "1px solid " + C.gla,
              color: C.mid,
              background: C.fro,
              cursor: "pointer",
              outline: "none",
            }}
          >
            {fmts.map(function (f) {
              return (
                <option key={f} value={f}>
                  {f}
                </option>
              );
            })}
          </select>
          <Bt href={dlHref}>Download</Bt>
        </div>
      </div>
    </div>
  );
}

function IconDownload(props) {
  var [fmt, setFmt] = useState("Vector Web");
  var fmts = ["Vector Web", "Web", "Web No BG", "Vector Print", "Print"];
  var slug = props.slug || "";
  var dlHref = slug ? iconDownload(slug, fmt) : null;
  return (
    <div
      style={{
        display: "flex",
        gap: 6,
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <select
        value={fmt}
        onChange={function (e) {
          setFmt(e.target.value);
        }}
        style={{
          fontSize: 11,
          padding: "4px 6px",
          borderRadius: 5,
          border: "1px solid " + (props.ac ? props.ac + "66" : C.gla),
          color: props.ac || C.mid,
          background: C.fro,
          cursor: "pointer",
          outline: "none",
        }}
      >
        {fmts.map(function (f) {
          return (
            <option key={f} value={f}>
              {f}
            </option>
          );
        })}
      </select>
      <Bt href={dlHref}>Download</Bt>
    </div>
  );
}

function LetterheadCard(props) {
  var dlHref = letterheadUrl(props.slug);
  return (
    <div
      style={{
        border: "1px solid " + C.gla,
        borderRadius: 10,
        padding: 14,
        flex: props.wide ? "1 1 100%" : "1 1 200px",
        minWidth: 200,
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: C.mid,
          marginBottom: 2,
        }}
      >
        {props.title}
      </div>
      {props.subtitle && (
        <div style={{ fontSize: 11, color: C.bat, marginBottom: 8 }}>
          {props.subtitle}
        </div>
      )}
      <Bt href={dlHref}>Download .docx</Bt>
    </div>
  );
}

function LogoGrid(props) {
  var [orient, setO] = useState("horizontal");
  var [cmode, setC] = useState("color");
  var [fmt, setFmt] = useState("Vector Web");
  var dk = cmode === "inverted";
  var fmts = dk
    ? ["Vector Web", "Web No BG", "Vector Print", "Print"]
    : ["Vector Web", "Web", "Web No BG", "Vector Print", "Print"];
  var activeFmt = fmts.indexOf(fmt) === -1 ? "Vector Web" : fmt;

  function chip(label, val, cur, set) {
    var on = cur === val;
    return (
      <button
        key={val}
        onClick={function () {
          set(val);
        }}
        style={{
          padding: "4px 12px",
          borderRadius: 16,
          fontSize: 11,
          fontWeight: 500,
          cursor: "pointer",
          border: "1px solid " + (on ? C.cer : C.gla),
          background: on ? C.c50 : "transparent",
          color: on ? C.cer : C.cav,
        }}
      >
        {label}
      </button>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          marginBottom: 14,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: 4 }}>
          {chip("Horizontal", "horizontal", orient, setO)}
          {chip("Vertical", "vertical", orient, setO)}
        </div>
        <div style={{ width: 1, height: 20, background: C.gla }} />
        <div style={{ display: "flex", gap: 4 }}>
          {chip("Full color", "color", cmode, setC)}
          {chip("Inverted", "inverted", cmode, setC)}
        </div>
        <div style={{ width: 1, height: 20, background: C.gla }} />
        <select
          value={activeFmt}
          onChange={function (e) {
            setFmt(e.target.value);
          }}
          style={{
            fontSize: 11,
            padding: "4px 6px",
            borderRadius: 5,
            border: "1px solid " + C.gla,
            color: C.mid,
            background: C.fro,
            cursor: "pointer",
            outline: "none",
          }}
        >
          {fmts.map(function (f) {
            return (
              <option key={f} value={f}>
                {f}
              </option>
            );
          })}
        </select>
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {props.items.map(function (it) {
          var label = it[0];
          var sub = it[1] || null;
          var ac = it[2] || null;
          var slug = it[3] || null;
          var suffix =
            (dk ? "-inv" : "") + (orient === "vertical" ? "-vert" : "");
          var fullSlug = slug ? slug + suffix : null;
          var previewImg = fullSlug ? logoPreview(fullSlug) : null;
          var dlHref = fullSlug ? logoDownload(fullSlug, activeFmt) : null;
          var txt = label + " / " + orient + " / " + (dk ? "white" : "color");
          var cardFlex = "1 1 170px";
          var cardMin = 170;
          if (props.cols === 2) {
            cardFlex = "1 1 calc(50% - 5px)";
            cardMin = 200;
          } else if (props.cols === 3) {
            cardFlex = "1 1 calc(33.333% - 7px)";
            cardMin = 170;
          }
          return (
            <div
              key={label}
              style={{
                border: "1px solid " + C.gla,
                borderRadius: 10,
                overflow: "hidden",
                flex: cardFlex,
                minWidth: cardMin,
              }}
            >
              {ac && <div style={{ height: 4, background: ac }} />}
              <div style={{ padding: 14, textAlign: "center" }}>
                <div style={{ margin: "14px 0 18px" }}>
                  <Bx
                    t={txt}
                    h={orient === "vertical" ? 70 : 50}
                    dark={dk}
                    img={previewImg}
                  />
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: ac || C.mid,
                    margin: "8px 0 2px",
                    lineHeight: 1.3,
                  }}
                >
                  {label}
                </div>
                {sub && (
                  <div
                    style={{
                      fontSize: 10,
                      color: C.bat,
                      marginBottom: 6,
                      lineHeight: 1.4,
                    }}
                  >
                    {sub}
                  </div>
                )}
                <div style={{ fontSize: 10, color: C.bat, marginBottom: 6 }}>
                  {activeFmt}
                </div>
                <Bt href={dlHref}>Download</Bt>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Sec(props) {
  return (
    <section
      id={props.id}
      style={{
        paddingTop: 36,
        paddingBottom: 36,
        borderBottom: "1px solid " + C.gla,
      }}
    >
      {props.pn && (
        <div
          style={{
            fontSize: 10,
            color: C.bat,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 4,
          }}
        >
          {"Part " + props.pn + " · " + PL[props.pn]}
        </div>
      )}
      {props.t && (
        <h2
          style={{
            fontFamily: "'DM Serif Text',serif",
            fontSize: 26,
            color: C.mid,
            margin: "0 0 6px",
            fontWeight: 400,
          }}
        >
          {props.t}
        </h2>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          margin: "16px 0 20px",
        }}
      >
        <img
          src={img("graphics/arch-divider.svg")}
          alt=""
          style={{ width: 55, height: 19, flexShrink: 0 }}
        />
        <div style={{ height: 1, flex: 1, background: C.gla }} />
      </div>
      {props.children}
    </section>
  );
}

function H3(props) {
  return (
    <h3
      style={{
        fontSize: 17,
        color: C.mid,
        margin: "28px 0 10px",
        fontWeight: 600,
      }}
    >
      {props.children}
    </h3>
  );
}
function H4(props) {
  return (
    <h4
      style={{
        fontSize: 14,
        color: C.mid,
        margin: "20px 0 6px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
      }}
    >
      {props.children}
    </h4>
  );
}
function P(props) {
  return (
    <p
      style={{
        fontSize: 14,
        color: props.it ? C.mid : props.mu ? C.bat : C.cav,
        lineHeight: 1.7,
        margin: "0 0 12px",
        fontStyle: props.it ? "italic" : "normal",
        fontWeight: props.b ? 600 : 400,
      }}
    >
      {props.children}
    </p>
  );
}
function Q(props) {
  return (
    <blockquote
      style={{
        borderLeft: "3px solid " + C.gam,
        margin: "16px 0",
        padding: "10px 18px",
        background: C.smo,
        borderRadius: "0 8px 8px 0",
      }}
    >
      <div
        style={{
          fontFamily: "'DM Serif Text',serif",
          fontSize: 17,
          color: C.mid,
          fontStyle: "italic",
          lineHeight: 1.5,
        }}
      >
        {props.children}
      </div>
      {props.a && (
        <div style={{ fontSize: 11, color: C.bat, marginTop: 6 }}>
          {props.a}
        </div>
      )}
    </blockquote>
  );
}
function Row(props) {
  return (
    <div
      style={{
        display: "flex",
        gap: props.gap || 8,
        flexWrap: "wrap",
        marginTop: props.mt || 0,
        marginBottom: props.mb || 10,
      }}
    >
      {props.children}
    </div>
  );
}

// Review-mode system: gates "in-review" subsections behind a PIN so executives
// can preview suggested updates without disrupting approved content.
var REVIEW_PIN = "5678";
var ReviewContext = createContext(false);

function ReviewBlock(props) {
  var review = useContext(ReviewContext);
  var [approved, setApproved] = useState(false);
  if (!review) return null;
  var accent = approved ? C.sag : C.gam;
  return (
    <div
      style={{
        border: "1px dashed " + accent,
        background: approved ? "rgba(75,140,132,0.06)" : "rgba(255,173,0,0.06)",
        borderRadius: 10,
        padding: "20px 18px 16px",
        margin: "16px 0",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -10,
          left: 14,
          background: accent,
          color: approved ? "#fff" : C.mid,
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          padding: "3px 8px",
          borderRadius: 4,
        }}
      >
        {approved ? "Approved" : "Pending review"}
        {props.label ? " · " + props.label : ""}
      </div>
      <button
        onClick={function () {
          setApproved(!approved);
        }}
        style={{
          position: "absolute",
          top: -10,
          right: 14,
          fontSize: 10,
          fontWeight: 600,
          background: C.fro,
          border: "1px solid " + accent,
          borderRadius: 4,
          padding: "3px 8px",
          cursor: "pointer",
          color: accent,
        }}
      >
        Mark {approved ? "in review" : "approved"}
      </button>
      {props.children}
    </div>
  );
}

var COLLATERAL_TYPES = [
  "Folder Booklet",
  "One-Pager",
  "Trifold",
  "Rack Card",
  "Postcard",
  "Digital PDF",
];

var REGIONAL_COLLATERAL_TYPES = [
  "One-Pager",
  "Trifold",
  "Rack Card",
  "Postcard",
  "Digital PDF",
];

function CollateralNav(props) {
  var categories = props.categories;
  var [cat, setCat] = useState(categories[0].id);
  var cur = categories.find(function (c) {
    return c.id === cat;
  });
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          marginBottom: 16,
          borderBottom: "2px solid " + C.gla,
          paddingBottom: 12,
        }}
      >
        {categories.map(function (c) {
          var on = cat === c.id;
          return (
            <button
              key={c.id}
              onClick={function () {
                setCat(c.id);
              }}
              style={{
                padding: "6px 14px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: on ? 600 : 400,
                cursor: "pointer",
                border: "none",
                background: on ? c.ac || C.mid : "rgba(8,48,69,0.07)",
                color: on ? "#fff" : C.mid,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {c.ac && (
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: on ? "rgba(255,255,255,0.6)" : c.ac,
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
              )}
              {c.label}
            </button>
          );
        })}
      </div>
      {cur.sub ? (
        <SubCollateral key={cat} items={cur.sub} ac={cur.ac} types={props.types} />
      ) : (
        <Row gap={10}>
          {(props.types || COLLATERAL_TYPES).map(function (t) {
            return <Pc key={t} t={t} d={cur.label} />;
          })}
        </Row>
      )}
    </div>
  );
}

function SubCollateral(props) {
  var [sel, setSel] = useState(props.items[0].id);
  var cur = props.items.find(function (i) {
    return i.id === sel;
  });
  return (
    <div>
      <div
        style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 14 }}
      >
        {props.items.map(function (item) {
          var on = sel === item.id;
          return (
            <button
              key={item.id}
              onClick={function () {
                setSel(item.id);
              }}
              style={{
                padding: "4px 12px",
                borderRadius: 20,
                fontSize: 11,
                fontWeight: on ? 600 : 400,
                cursor: "pointer",
                border: "1px solid " + (on ? props.ac || C.mid : C.gla),
                background: on ? "rgba(8,48,69,0.06)" : "transparent",
                color: on ? props.ac || C.mid : C.cav,
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <Row gap={10}>
        {(props.types || COLLATERAL_TYPES).map(function (t) {
          return <Pc key={t} t={t} d={cur.label} />;
        })}
      </Row>
    </div>
  );
}

function ExecGate() {
  var [pin, setPin] = useState("");
  var [unlocked, setUnlocked] = useState(false);
  var [err, setErr] = useState(false);
  function attempt() {
    if (pin === "1234") {
      setUnlocked(true);
      setErr(false);
    } else {
      setErr(true);
      setPin("");
    }
  }
  if (!unlocked)
    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px",
          background: C.smo,
          borderRadius: 12,
        }}
      >
        <div style={{ fontSize: 28, marginBottom: 8 }}>🔒</div>
        <div
          style={{
            fontFamily: "'DM Serif Text',serif",
            fontSize: 18,
            color: C.mid,
            marginBottom: 4,
          }}
        >
          Executive access only
        </div>
        <div style={{ fontSize: 13, color: C.bat, marginBottom: 20 }}>
          Enter your PIN to view this section
        </div>
        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="password"
            value={pin}
            onChange={function (e) {
              setPin(e.target.value);
              setErr(false);
            }}
            onKeyDown={function (e) {
              if (e.key === "Enter") attempt();
            }}
            placeholder="PIN"
            maxLength={6}
            style={{
              padding: "8px 12px",
              borderRadius: 6,
              border: "1px solid " + (err ? C.cer : C.gla),
              fontSize: 15,
              width: 100,
              textAlign: "center",
              outline: "none",
              background: "#fff",
            }}
          />
          <button
            onClick={attempt}
            style={{
              padding: "8px 16px",
              borderRadius: 6,
              background: C.mid,
              color: C.gam,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Enter
          </button>
        </div>
        {err && (
          <div style={{ fontSize: 11, color: C.cer, marginTop: 10 }}>
            Incorrect PIN. Please try again.
          </div>
        )}
      </div>
    );
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <P mu={true}>
          Internal and external executive materials. Confidential.
        </P>
        <button
          onClick={function () {
            setUnlocked(false);
            setPin("");
          }}
          style={{
            fontSize: 11,
            color: C.bat,
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          🔒 Lock
        </button>
      </div>
      <H3>Internal</H3>
      <Row gap={10}>
        {[
          ["Board Deck", "Approved data"],
          ["Investor Deck", "Confidential"],
          ["Meeting Templates", "Reviews, planning"],
          ["Reports", "C-suite comms"],
        ].map(function (i) {
          return <Pc key={i[0]} t={i[0]} d={i[1]} />;
        })}
      </Row>
      <H3>External</H3>
      <Row gap={10}>
        {[
          ["Executive Summary", "Partners, investors"],
          ["Thought Leadership", "Articles, papers"],
          ["Speaker Kit", "Slides, bios"],
          ["Media Kit", "Press-ready"],
        ].map(function (i) {
          return <Pc key={i[0]} t={i[0]} d={i[1]} />;
        })}
      </Row>
      <P mu={true}>
        V3 will expand this section with executive bio templates, headshot
        specifications, approved talking points, and conference/speaking
        engagement brand standards.
      </P>
    </div>
  );
}

export default function App() {
  var [mo, setMo] = useState(false);
  var [ac, setAc] = useState("hero");
  var [q, setQ] = useState("");
  var [lr, setLr] = useState("All");
  var [pvTitle, setPvTitle] = useState(null);
  var [review, setReview] = useState(false);
  var [reviewGate, setReviewGate] = useState(false);
  var [reviewPin, setReviewPin] = useState("");
  var [reviewErr, setReviewErr] = useState(false);

  function attemptReview() {
    if (reviewPin === REVIEW_PIN) {
      setReview(true);
      setReviewGate(false);
      setReviewPin("");
      setReviewErr(false);
    } else {
      setReviewErr(true);
      setReviewPin("");
    }
  }

  var openPreview = useCallback(function (title) {
    setPvTitle(title);
  }, []);
  var closePreview = useCallback(function () {
    setPvTitle(null);
  }, []);
  _openPreview = openPreview;

  useEffect(function () {
    var l = document.createElement("link");
    l.href =
      "https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap";
    l.rel = "stylesheet";
    document.head.appendChild(l);
  }, []);

  var goTo = useCallback(function (id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMo(false);
  }, []);

  useEffect(function () {
    var o = new IntersectionObserver(
      function (es) {
        for (var i = 0; i < es.length; i++) {
          if (es[i].isIntersecting) {
            setAc(es[i].target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    SECS.forEach(function (s) {
      var el = document.getElementById(s[0]);
      if (el) o.observe(el);
    });
    return function () {
      o.disconnect();
    };
  }, []);

  var fs = q
    ? SECS.filter(function (s) {
        return s[1].toLowerCase().indexOf(q.toLowerCase()) !== -1;
      })
    : SECS;
  var ff =
    lr === "All"
      ? FACS
      : FACS.filter(function (f) {
          return f[2] === lr;
        });

  function nav(mobile) {
    var bgPattern = img("graphics/form-bg-pattern.svg");
    var bgLayers = bgPattern
      ? {
          backgroundColor: C.pru,
          backgroundImage:
            "linear-gradient(to top, rgba(8,48,69,0.96) 0%, " +
            C.pru +
            " 100%), url(" +
            bgPattern +
            ")",
          backgroundRepeat: "no-repeat, repeat",
          backgroundPosition: "0 0, 0 0",
          backgroundSize: "100% 100%, 64px 64px",
          backgroundAttachment: "scroll, scroll",
        }
      : { background: C.pru };
    var st = mobile
      ? Object.assign({}, bgLayers, {
          width: "100%",
          color: C.fro,
          padding: "14px 18px",
          fontFamily: "'IBM Plex Sans',sans-serif",
        })
      : Object.assign({}, bgLayers, {
          width: 270,
          color: C.fro,
          padding: "20px 16px",
          fontFamily: "'IBM Plex Sans',sans-serif",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          overflowY: "auto",
          zIndex: 100,
        });
    var lp = null;
    var items = fs.map(function (s) {
      var sp = s[2] && s[2] !== lp;
      if (s[2]) lp = s[2];
      var on = ac === s[0];
      return (
        <div key={s[0]}>
          {sp && (
            <div
              style={{
                fontSize: 9,
                color: C.fro,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "14px 8px 4px",
                fontWeight: 600,
                borderTop: "1px solid " + C.pru,
                marginTop: 8,
                whiteSpace: "nowrap",
              }}
            >
              {"Part " + s[2] + " · " + PL[s[2]]}
            </div>
          )}
          {!s[2] && s[0] !== "hero" && <div style={{ height: 6 }} />}
          <div
            onClick={function () {
              goTo(s[0]);
            }}
            style={{
              padding: "5px 8px",
              borderRadius: 6,
              fontSize: 12,
              cursor: "pointer",
              color: on ? C.gam : C.cad,
              background: on ? "rgba(255,173,0,0.1)" : "transparent",
              fontWeight: on ? 600 : 400,
            }}
          >
            {s[1]}
          </div>
        </div>
      );
    });
    return (
      <div style={st}>
        <div style={{ marginBottom: 16 }}>
          <div
            style={{
              width: "100%",
              height: 36,
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 6,
            }}
          >
            <img
              src={img("logos/nav-logo.svg")}
              alt="Guardian Recovery"
              style={{ maxWidth: "100%", maxHeight: 36, objectFit: "contain" }}
            />
          </div>
          <div
            style={{
              fontSize: 9,
              color: C.cad,
              letterSpacing: "0.04em",
              textAlign: "left",
            }}
          >
            Brand Guidelines V2
          </div>
        </div>
        <input
          value={q}
          onChange={function (e) {
            setQ(e.target.value);
          }}
          placeholder="Search..."
          style={{
            width: "100%",
            padding: "6px 8px",
            borderRadius: 6,
            border: "1px solid " + C.pru,
            background: "rgba(255,255,255,0.06)",
            color: C.fro,
            fontSize: 11,
            marginBottom: 12,
            boxSizing: "border-box",
            outline: "none",
          }}
        />
        <nav>{items}</nav>
        <div
          style={{
            borderTop: "1px solid " + C.pru,
            marginTop: 16,
            paddingTop: 14,
          }}
        >
          <div
            style={{
              fontSize: 9,
              color: C.cad,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 8,
              fontWeight: 600,
            }}
          >
            Download Full Guide
          </div>
          <a
            href={GUIDE_PDF || "#"}
            download
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 8px",
              borderRadius: 6,
              fontSize: 11,
              color: C.gam,
              background: "rgba(255,173,0,0.1)",
              textDecoration: "none",
              fontWeight: 500,
              marginBottom: 6,
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 14 }}>↓</span> PDF Version
          </a>
          <a
            href={GUIDE_MD || "#"}
            download
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 8px",
              borderRadius: 6,
              fontSize: 11,
              color: C.cad,
              background: "rgba(255,255,255,0.04)",
              textDecoration: "none",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 14 }}>↓</span> Markdown Version
          </a>
          <div
            onClick={function () {
              if (review) {
                setReview(false);
              } else {
                setReviewGate(true);
              }
            }}
            style={{
              marginTop: 14,
              padding: "6px 8px",
              borderRadius: 6,
              fontSize: 11,
              color: review ? C.gam : C.cad,
              background: review
                ? "rgba(255,173,0,0.12)"
                : "rgba(255,255,255,0.04)",
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 14 }}>{review ? "🔓" : "🔒"}</span>
            {review ? "Review Mode (lock)" : "Review Mode"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <ReviewContext.Provider value={review}>
    <div
      style={{
        fontFamily: "'IBM Plex Sans',sans-serif",
        display: "flex",
        minHeight: "100vh",
        background: C.fro,
      }}
    >
      <PreviewModal
        open={!!pvTitle}
        title={pvTitle || ""}
        onClose={closePreview}
      />
      {reviewGate && (
        <div
          onClick={function () {
            setReviewGate(false);
            setReviewPin("");
            setReviewErr(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(8,48,69,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            cursor: "pointer",
          }}
        >
          <div
            onClick={function (e) {
              e.stopPropagation();
            }}
            style={{
              background: C.fro,
              borderRadius: 14,
              maxWidth: 380,
              width: "100%",
              padding: "28px 24px",
              textAlign: "center",
              cursor: "default",
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 8 }}>🔒</div>
            <div
              style={{
                fontFamily: "'DM Serif Text',serif",
                fontSize: 18,
                color: C.mid,
                marginBottom: 4,
              }}
            >
              Review Mode
            </div>
            <div style={{ fontSize: 13, color: C.bat, marginBottom: 18 }}>
              Reveals areas of exploration and recommendation. Approved
              content is unaffected.
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                type="password"
                value={reviewPin}
                onChange={function (e) {
                  setReviewPin(e.target.value);
                  setReviewErr(false);
                }}
                onKeyDown={function (e) {
                  if (e.key === "Enter") attemptReview();
                }}
                placeholder="PIN"
                maxLength={6}
                autoFocus
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "1px solid " + (reviewErr ? C.cer : C.gla),
                  fontSize: 15,
                  width: 100,
                  textAlign: "center",
                  outline: "none",
                  background: "#fff",
                }}
              />
              <button
                onClick={attemptReview}
                style={{
                  padding: "8px 16px",
                  borderRadius: 6,
                  background: C.mid,
                  color: C.gam,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Enter
              </button>
            </div>
            {reviewErr && (
              <div style={{ fontSize: 12, color: C.cer, marginTop: 10 }}>
                Incorrect PIN. Please try again.
              </div>
            )}
          </div>
        </div>
      )}
      <style>{`@media(min-width:800px){.sd{display:block!important}.hb{display:none!important}.mc{margin-left:290px!important}}@media(max-width:799px){.sd{display:none!important}}`}</style>
      <div className="sd" style={{ display: "none" }}>
        {nav(false)}
      </div>
      <button
        className="hb"
        onClick={function () {
          setMo(!mo);
        }}
        style={{
          position: "fixed",
          top: 10,
          left: 10,
          zIndex: 200,
          width: 36,
          height: 36,
          borderRadius: 8,
          background: C.mid,
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <div style={{ width: 16, height: 2, background: C.gam }} />
        <div style={{ width: 16, height: 2, background: C.gam }} />
        <div style={{ width: 16, height: 2, background: C.gam }} />
      </button>
      {mo && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 150,
            background: "rgba(8,48,69,0.95)",
            overflowY: "auto",
            paddingTop: 50,
          }}
        >
          {nav(true)}
        </div>
      )}

      <main
        className="mc"
        style={{
          flex: 1,
          maxWidth: 800,
          padding: "0 20px 60px",
          boxSizing: "border-box",
        }}
      >
        {review && (
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 50,
              background: C.gam,
              color: C.mid,
              padding: "8px 16px",
              borderRadius: 0,
              margin: "0 -20px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 12,
              fontWeight: 600,
              boxShadow: "0 2px 8px rgba(8,48,69,0.12)",
            }}
          >
            <span>
              🔓 Review Mode — viewing suggested updates and exploration
            </span>
            <button
              onClick={function () {
                setReview(false);
              }}
              style={{
                fontSize: 11,
                fontWeight: 600,
                background: C.mid,
                color: C.gam,
                border: "none",
                borderRadius: 4,
                padding: "4px 10px",
                cursor: "pointer",
              }}
            >
              Lock
            </button>
          </div>
        )}
        {/* HERO */}
        <section id="hero" style={{ paddingTop: 50, paddingBottom: 30 }}>
          <div
            style={{
              fontSize: 10,
              color: C.bat,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 10,
            }}
          >
            V2 · April 2026
          </div>
          <h1
            style={{
              fontFamily: "'DM Serif Text',serif",
              fontSize: 38,
              color: C.mid,
              margin: "0 0 6px",
              fontWeight: 400,
            }}
          >
            <span>Guardian </span>
            <span style={{ color: C.gam }}>Recovery</span>
          </h1>
          <div
            style={{
              fontFamily: "'DM Serif Text',serif",
              fontSize: 20,
              color: C.cav,
              fontStyle: "italic",
              margin: "0 0 20px",
            }}
          >
            Brand Guidelines
          </div>
          <div style={{ margin: "20px 0" }}>
            <img
              src={img("graphics/arch-divider.svg")}
              alt=""
              style={{ width: 55, height: 19 }}
            />
          </div>
          <P>
            The single source of truth for brand identity, voice, visual system,
            application standards, and asset hub.
          </P>
          <Q a="Josh Scott, Founder">
            Our mission is simple: provide our clients with a program we would
            seek for ourselves or a loved one.
          </Q>
          <Row>
            <Bt
              v="primary"
              oc={function () {
                goTo("hub");
              }}
            >
              Asset Hub
            </Bt>
            <Bt>Logo Package</Bt>
            <Bt>Color Reference</Bt>
          </Row>
        </section>

        {/* 1 BRAND STORY */}
        <Sec id="story" pn="I" t="Brand Story and Positioning">
          <H3>Our Origin Story</H3>
          <P>
            Guardian Recovery was founded in 2007 by Josh Scott, who experienced
            the recovery journey firsthand and emerged with a clear conviction:
            that treatment should be something you'd seek for yourself or
            someone you love. Not a last resort. Not a clinical transaction. A
            turning point.
          </P>
          <P>
            What began as an adult substance use treatment program in Florida
            grew as the team recognized how few quality options existed. By
            2019, expanded SUD offerings across multiple states. In 2021, a
            shift to accessibility. By 2023, Adolescent and Mental Health
            service lines added. In 2024, Guardian Virtual launched.
          </P>
          <P>
            Today: 18 locations including virtual across six states with virtual
            counseling reaching a seventh. The founding conviction hasn't
            changed.
          </P>

          <H3>Mission</H3>
          <P>
            To provide compassionate, evidence-based behavioral healthcare that
            meets each individual exactly where they are, guiding them toward
            lifelong healing from substance use and mental health disorders.
          </P>

          <H3>Vision</H3>
          <P>
            A world where every person struggling with addiction or mental
            health challenges has access to care that honors their dignity,
            respects their journey, and empowers lasting transformation.
          </P>

          <H3>Brand Promise</H3>
          <Q>We provide care we would seek for ourselves or a loved one.</Q>
          <P>
            This is the single most important sentence in our brand. It filters
            every clinical decision, every hiring choice, every facility design,
            every piece of content, and every interaction with a Client or
            their family.
          </P>

          <H3>Core Values</H3>
          <Cd t="Compassion First">
            We lead with empathy in every interaction, from the first phone call
            to long-term aftercare. Every Client, every family member, every
            colleague deserves to feel seen and supported.
          </Cd>
          <Cd t="Clinical Excellence">
            We hold ourselves to the highest standards of evidence-based care.
            Joint Commission accreditation isn't a credential we display. It's a
            commitment we live daily.
          </Cd>
          <Cd t="Individualized Care">
            No two paths to healing are the same. We build personalized
            treatment plans that honor each Client's unique history, goals,
            and circumstances.
          </Cd>
          <Cd t="Lifelong Healing">
            Recovery doesn't end at discharge. Healing is a continuous process,
            and we design our programs and aftercare to support Clients
            throughout their journey.
          </Cd>
          <Cd t="Integrity and Accountability">
            We do what we say. We measure what matters. We hold ourselves
            accountable to the Clients, families, and communities we serve.
          </Cd>
          <Cd t="Community and Connection">
            Healing happens in relationship. We foster environments where
            Clients, families, clinical teams, and local communities are
            connected in purpose.
          </Cd>

          <H3>Brand Personality</H3>
          <Tb
            h={["Attribute", "What it means", "Not this"]}
            r={[
              [
                "Warm",
                "Approachable, caring, human",
                "Soft, vague, or sentimental",
              ],
              [
                "Confident",
                "Grounded expertise, clinical authority",
                "Arrogant, cold, or clinical-sounding",
              ],
              [
                "Honest",
                "Transparent, direct, trustworthy",
                "Blunt, harsh, or preachy",
              ],
              [
                "Empowering",
                "Strength-based, forward-looking",
                "Patronizing or generic",
              ],
              [
                "Grounded",
                "Calm, steady, dependable",
                "Boring, corporate, or detached",
              ],
            ]}
          />
          <P>
            We are not a wellness brand. We are not a hospital. We occupy a
            space that is both clinical and deeply human.
          </P>

          <H3>Taglines and Signatures</H3>
          <div
            style={{
              background: C.pru,
              borderRadius: 12,
              padding: "24px 20px",
              marginBottom: 16,
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            <div style={{ flex: "0 0 auto" }}>
              <div
                style={{
                  fontSize: 10,
                  color: C.cad,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 10,
                }}
              >
                Brand Tagline
              </div>
              <div
                style={{
                  fontFamily: "'DM Serif Text',serif",
                  fontSize: 28,
                  color: C.gam,
                  fontStyle: "italic",
                  whiteSpace: "nowrap",
                }}
              >
                Hope Starts Here.
              </div>
            </div>
            <div
              style={{
                flex: "1 1 220px",
                borderLeft: "1px solid " + C.pru,
                paddingLeft: 24,
              }}
            >
              <div style={{ fontSize: 13, color: C.cad, lineHeight: 1.7 }}>
                Three words that do everything a tagline should.{" "}
                <span style={{ color: C.fro, fontWeight: 500 }}>"Hope"</span>{" "}
                names the emotional state every Client, family member, and
                referral partner is seeking — it is the reason anyone picks up
                the phone.{" "}
                <span style={{ color: C.fro, fontWeight: 500 }}>"Starts"</span>{" "}
                positions Guardian Recovery as the threshold moment, not a last
                resort but a beginning.{" "}
                <span style={{ color: C.fro, fontWeight: 500 }}>"Here"</span>{" "}
                makes it immediate and specific — not someday, not somewhere,
                but right now, at this facility, with this team. The period is
                intentional. It is a declaration, not an invitation. Together,
                the three words compress the entire brand promise into a single
                breath.
              </div>
            </div>
          </div>

          <ReviewBlock label="Service line taglines">
            <H4>The "Freedom to" System</H4>
            <P>
              Each service line signature completes "Freedom to" with the
              single most resonant word for its audience. "Freedom" captures
              what every Client seeks: liberation from the condition
              controlling their life.
            </P>
            <Cd ac={C.cer} t="Adult SUD" sub="Freedom to live.">
              For someone in the grip of addiction, life has stopped.
              Relationships, careers, health, joy — all suspended or
              destroyed. "Live" cuts straight to the core of what recovery
              restores. Simple, direct, and complete — it is both the loss
              and the promise in a single word.
            </Cd>
            <Cd ac={C.pac} t="Adult Mental Health" sub="Freedom to feel.">
              The mental health audience isn't dying — they're muted. Anxiety
              narrows attention, depression flattens emotional range, trauma
              walls off parts of themselves. "Feel" names exactly what these
              conditions take away and what treatment restores: the full,
              unguarded experience of being alive.
            </Cd>
            <Cd ac={C.sag} t="Adolescent" sub="Freedom to grow.">
              Growth is the defining task of adolescence. When substance use
              or mental health challenges intervene, that growth stalls —
              emotionally, socially, academically, developmentally. "Grow"
              names what treatment restores: the natural trajectory of a
              young person's life.
            </Cd>

            <H4>Pairing (With Brand Tagline Only)</H4>
            <P it={true}>"Hope Starts Here. Freedom to live."</P>
            <P it={true}>"Hope Starts Here. Freedom to feel."</P>
            <P it={true}>"Hope Starts Here. Freedom to grow."</P>
            <P mu={true}>
              Service line signatures pair with "Hope Starts Here." only.
              They do not pair with the BD or internal lines.
            </P>
          </ReviewBlock>

          <H4>Other Signature Lines</H4>
          <Tb
            h={["Line", "Usage"]}
            r={[
              [
                '"Your Partner in Behavioral Health"',
                "BD presentations, referral partners, employer-facing materials only",
              ],
              [
                '"Healing Lives. Building Futures."',
                "Internal communications, recruitment, staff onboarding, culture",
              ],
            ]}
          />
        </Sec>

        {/* 2 VOICE */}
        <Sec id="voice" pn="I" t="Brand Voice and Messaging">
          <H3>Voice Principles</H3>
          <Cd t="Human, not clinical">
            We speak like a trusted person, not a textbook. We use clinical
            terms when precision matters, but never hide behind jargon. We say
            "withdrawal management" for clinicians and "getting through the
            hardest part safely" for families.
          </Cd>
          <Cd t="Show, don't declare">
            The most common mistake is stating values instead of demonstrating
            them. "We provide compassionate care" tells the reader what to
            think. "Your care team builds your treatment plan around your life,
            your goals, and what matters most to you" shows them what care feels
            like.
          </Cd>
          <Cd t="Confident, not boastful">
            We know the quality of our care. We let our accreditation, our
            continuum, and our outcomes speak. We never say "the best" or
            "guaranteed results."
          </Cd>
          <Cd t="Warm, not sentimental">
            We care deeply and we show it. But we don't romanticize addiction or
            mental health. These are serious medical conditions.
          </Cd>
          <Cd t="Direct, not aggressive">
            In SUD marketing especially, urgency matters. But urgency is not
            pressure. "Help is available right now" is direct. "Don't wait or it
            could be too late" is fear-based and off-brand.
          </Cd>
          <Cd t="Inclusive, not generic">
            We serve diverse populations across six states. Our language should
            feel welcoming to all Clients without resorting to hollow diversity
            statements.
          </Cd>

          <Q>
            Picture a place where you have a care team, not independent
            providers. Where treatment plans aren't prescribed, they're
            constructed to fit your unique needs. Where healing isn't about just
            managing symptoms, it's about transforming lives. That place is
            Guardian Recovery.
          </Q>
          <P mu={true}>Benchmark example. Experiential, not declarative.</P>

          <H3>Tone Spectrum</H3>
          <Tb
            h={["Context", "Tone", "Example"]}
            r={[
              [
                "Crisis / Admissions",
                "Calm, reassuring, action-oriented",
                "We're here. Let's talk about what you need right now.",
              ],
              [
                "Website / Educational",
                "Informative, warm, accessible",
                "Medical detox provides 24/7 supervision to help you withdraw safely.",
              ],
              [
                "Family-facing",
                "Empathetic, guiding, transparent",
                "You don't have to navigate this alone.",
              ],
              [
                "Adolescent (parent-facing)",
                "Reassuring, expert, protective",
                "Designed by specialists who understand the challenges teens face.",
              ],
              [
                "BD / Referral partners",
                "Professional, credible, collaborative",
                "Full continuum of ASAM-aligned care with seamless transitions.",
              ],
              [
                "Social media",
                "Hopeful, community-driven",
                "Recovery looks different for everyone. What matters is the first step.",
              ],
              [
                "Internal / Culture",
                "Purpose-driven, honest",
                "Every Client we welcome. That's why we're here.",
              ],
            ]}
          />

          <H3>The "Client" Standard</H3>
          <P>
            Guardian Recovery refers to the individuals receiving care as
            "Clients" across all communications. This person-first term
            preserves dignity while staying clear and consistent across
            clinical, marketing, and referral contexts.
          </P>
          <Tb
            h={["Context", "Term"]}
            r={[
              ["All external communications", "Client / Clients"],
              ["Internal communications", "Client / Clients"],
              [
                "Clinical documentation",
                "Patient / Client (regulatory compliance)",
              ],
              ["Marketing copy on clinical topics", "Client"],
              ["Third-party / media", "Client"],
              [
                "Plymouth House (only)",
                "Guest / Guests — facility-specific exception",
              ],
            ]}
          />
          <P mu={true}>
            Plymouth House exception: Plymouth House uses "Guest" exclusively
            in all communications, reflecting its hospitality-centered model.
            All other facilities use "Client."
          </P>
          <P it={true}>
            Never: "Addict," "alcoholic" as a noun, "substance abuser,"
            "junkie," or any pejorative.
          </P>

          <H3>Approved Terminology</H3>
          <Tb
            h={["Use this", "Not this", "Why"]}
            r={[
              [
                "Client",
                "Patient (in marketing)",
                "Person-first standard across all facilities except Plymouth House",
              ],
              [
                "Person with a substance use disorder",
                "Addict, substance abuser",
                "Person-first language",
              ],
              [
                "Substance use disorder (SUD)",
                "Substance abuse, drug abuse",
                "'Abuse' implies moral failure",
              ],
              [
                "Evidence-based treatment",
                "Cure, fix, guaranteed recovery",
                "Addiction is a chronic condition",
              ],
              [
                "Return to use / recurrence",
                "Relapse (use sparingly)",
                "Normalizes clinical reality",
              ],
              [
                "Co-occurring disorders / dual diagnosis",
                "Double diagnosis",
                "Clinical accuracy",
              ],
              [
                "Family members / loved ones",
                "Codependents (unless clinical)",
                "Avoids labeling",
              ],
            ]}
          />
          <P mu={true}>
            SEO exception: terms like "drug rehab" or "detox center" acceptable
            in ad copy matching search intent.
          </P>

          <H3>Compliance Language</H3>
          <P>
            <span style={{ fontWeight: 600 }}>No guaranteed outcomes.</span>{" "}
            Never state or imply that treatment will cure addiction.
          </P>
          <P>
            <span style={{ fontWeight: 600 }}>HIPAA.</span> No Client names,
            images, or testimonials without documented written consent.
          </P>
          <P>
            <span style={{ fontWeight: 600 }}>LegitScript.</span> All paid
            advertising must comply.
          </P>
          <P>
            <span style={{ fontWeight: 600 }}>Insurance.</span> "We accept most
            major insurance plans" with disclaimers. Never guarantee coverage.
          </P>
        </Sec>

        {/* 3 ARCHITECTURE */}
        <Sec id="arch" pn="I" t="Brand Architecture">
          <H3>Naming Convention</H3>
          <P b={true}>
            Every facility: Guardian Recovery - [Facility Name]. Non-negotiable
            on first reference in all materials.
          </P>
          <P>
            Subsequent references may use the facility name alone once Guardian
            Recovery context is established.
          </P>

          <H4>Florida</H4>
          <Tb
            h={["Facility", "City", "Services"]}
            r={[
              [
                "GR - Immersion Residential",
                "Boynton Beach",
                "Medical Detox, Residential",
              ],
              [
                "GR - Immersion Outpatient",
                "Delray Beach",
                "PHP, SUD IOP, MH IOP, Virtual OP",
              ],
            ]}
          />
          <H4>New Jersey</H4>
          <Tb
            h={["Facility", "City", "Services"]}
            r={[
              [
                "GR - Princeton Detox & Recovery Center",
                "Monmouth Junction",
                "Detox, Residential, Virtual OP",
              ],
              [
                "GR - Princeton Psychiatry & Counseling",
                "Princeton",
                "MH IOP, MH OP",
              ],
              [
                "GR - New Pathway Bayonne",
                "Bayonne",
                "SUD IOP, MH IOP, Adol IOP, Virtual",
              ],
              [
                "GR - New Pathway Pine Brook",
                "Pine Brook",
                "SUD IOP, MH IOP, Adol IOP, Virtual",
              ],
              [
                "GR - Hoboken Counseling Center",
                "Hoboken",
                "SUD IOP, MH IOP, Virtual",
              ],
              [
                "GR - New Brunswick Counseling Center",
                "New Brunswick",
                "SUD IOP, MH IOP, Virtual",
              ],
              [
                "GR - Saddle Brook Counseling Center",
                "Saddle Brook",
                "SUD IOP, MH IOP, Virtual",
              ],
              [
                "GR - Montville Adolescent Center",
                "Towaco",
                "Adolescent Detox, Residential",
              ],
            ]}
          />
          <H4>New England</H4>
          <Tb
            h={["Facility", "City", "Services"]}
            r={[
              [
                "GR - Pine Tree",
                "Portland, ME",
                "Detox, Res, PHP, SUD IOP, Virtual",
              ],
              [
                "GR - Portland Psychiatry & Counseling",
                "South Portland, ME",
                "MH PHP, MH IOP, Virtual",
              ],
              [
                "GR - Portland Addiction Center",
                "Westbrook, ME",
                "Residential Supportive Housing",
              ],
              [
                "GR - Plymouth House",
                "Plymouth, NH",
                "Detox, Res, PHP, Virtual",
              ],
            ]}
          />
          <H4>Colorado, Texas, Virtual</H4>
          <Tb
            h={["Facility", "Location", "Services"]}
            r={[
              [
                "GR - CuraWest",
                "Denver, CO",
                "Medical Detox, Residential, Virtual",
              ],
              [
                "GR - Dallas Addiction Center",
                "Plano, TX",
                "Medical Detox, Residential, Virtual",
              ],
              [
                "GR - Virtual Counseling",
                "FL, TX, NJ, ME, NH, CO, PA",
                "IOP, MH IOP, OP, MH OP",
              ],
            ]}
          />

          <H3>Boilerplate Copy</H3>
          <Cd t="Long (100+ words)">
            Guardian Recovery is a national network of behavioral healthcare
            centers dedicated to providing compassionate, evidence-based
            treatment for substance use and mental health disorders. With 18
            locations including virtual across six states and virtual counseling
            services, Guardian Recovery offers a full continuum of care from
            medical detox and residential treatment through partial
            hospitalization, intensive outpatient, and outpatient services. Our
            three distinct service lines ensure that every Client receives care
            tailored to their unique needs, goals, and circumstances. Accredited
            by The Joint Commission. guardianrecovery.com
          </Cd>
          <Cd t="Medium (50-75 words)">
            Guardian Recovery is a national behavioral healthcare network
            operating 18 locations including virtual across six states. We
            provide the full continuum of addiction and mental health care, from
            medical detox through outpatient, for adults and adolescents.
            Accredited by The Joint Commission, our evidence-based programs are
            built around each Client's unique needs. guardianrecovery.com
          </Cd>
          <Cd t="Short (25-35 words)">
            Guardian Recovery provides compassionate, evidence-based addiction
            and mental health treatment across 18 locations including virtual
            nationwide. Accredited by The Joint Commission. guardianrecovery.com
          </Cd>
        </Sec>

        {/* 4 SERVICE LINES */}
        <Sec id="svc" pn="I" t="Service Lines and Specialty Programs">
          <P>
            Guardian Recovery operates three clinical service lines and several
            specialty programs. Each has its own audience, clinical programming,
            messaging strategy, and brand expression.
          </P>
          <Row gap={12}>
            <Cd ac={C.cer} t="Adult SUD" sub={review ? "Freedom to live." : null}>
              Foundational service line. Full continuum: Detox through Alumni.
              12-Step Immersion methodology. MAT. Dual diagnosis. Family therapy
              at every phase. Individualized treatment planning.
            </Cd>
            <Cd ac={C.pac} t="Adult Mental Health" sub={review ? "Freedom to feel." : null}>
              Growing service line added 2023. IOP and PHP as accessible
              alternatives to weekly therapy. Condition-specific expertise
              across anxiety, depression, PTSD, trauma, bipolar, OCD, grief,
              burnout. Guardian Virtual for telehealth access.
            </Cd>
            <Cd ac={C.sag} t="Adolescent" sub={review ? "Freedom to grow." : null}>
              Ages 13-17. Clinically distinct from adult programming.
              Adolescents never mixed with adults. Family-centered with family
              therapy as core. Educational continuity with academic support.
              Montville Adolescent Center (Towaco, NJ).
            </Cd>
          </Row>

          <H3>Service Line Identity System</H3>
          <Tb
            h={
              review
                ? [
                    "Service line",
                    "Accent color",
                    "Primary audience",
                    "Signature",
                  ]
                : ["Service line", "Accent color", "Primary audience"]
            }
            r={[
              [
                "Adult SUD",
                "Cerulean (#00728B)",
                "Individuals in crisis + families",
              ].concat(review ? ["Freedom to live."] : []),
              [
                "Adult Mental Health",
                "Pacific (#5B9CB8)",
                "Individuals seeking help",
              ].concat(review ? ["Freedom to feel."] : []),
              [
                "Adolescent",
                "Sage (#4B8C84)",
                "Parents and guardians",
              ].concat(review ? ["Freedom to grow."] : []),
            ]}
          />

          <H3>Specialty Programs</H3>
          <Cd t="Guardian Recovery - Virtual Counseling">
            Telehealth across seven states (FL, TX, NJ, ME, NH, CO, PA). IOP, MH
            IOP, OP, MH OP. Does not include Detox, Residential, or PHP. An
            extension of the continuum, not a separate brand.
          </Cd>
          <Cd t="Portland Psychiatry & Counseling">
            South Portland, ME. MH PHP, MH IOP, Virtual Outpatient. Owned by
            Guardian Recovery, not yet operating under the GR brand prefix.
          </Cd>

          <H3>Levels of Care</H3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
              gap: 12,
              marginBottom: 16,
            }}
          >
            {[
              [
                "Medical Detox",
                "Detox",
                "Medically supervised withdrawal management with 24/7 nursing and physician oversight. The first step for Clients with significant physiological dependence, designed to stabilize the body safely before therapeutic work begins.",
              ],
              [
                "Residential Treatment",
                "Residential",
                "Live-in clinical programming that combines individual therapy, group work, and structured daily routines in a supportive environment. For Clients who need to step away from daily triggers to build a stable foundation in recovery.",
              ],
              [
                "Partial Hospitalization Program",
                "PHP",
                "Intensive day programming (typically 5–6 hours per day, 5 days per week) without overnight stay. A bridge between residential and outpatient, providing high-touch clinical care while Clients return home each evening.",
              ],
              [
                "Intensive Outpatient Program",
                "IOP",
                "Structured group and individual therapy (about 3 hours per day, 3–5 days per week) that fits around work, school, or family responsibilities. Reinforces skills built in higher levels of care.",
              ],
              [
                "Outpatient",
                "OP",
                "Ongoing individual therapy, medication management, and alumni support delivered weekly or as needed. The long-term layer of the continuum, supporting sustained recovery after intensive treatment.",
              ],
              [
                "Mental Health Program variants",
                "MH PHP / MH IOP / MH OP",
                "Mental Health Partial Hospitalization, Intensive Outpatient, and Outpatient programs follow the same structures as their SUD counterparts but are clinically tailored to anxiety, depression, trauma, and other mental health conditions.",
              ],
              [
                "Virtual Outpatient",
                "Virtual OP",
                "Telehealth delivery of IOP and OP programming for Clients who cannot attend in person, available across seven states. Same evidence-based curriculum as on-site outpatient care.",
              ],
            ].map(function (lc) {
              return (
                <div
                  key={lc[0]}
                  style={{
                    border: "1px solid " + C.gla,
                    borderRadius: 10,
                    padding: "14px 16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: C.mid,
                      marginBottom: 6,
                      lineHeight: 1.3,
                    }}
                  >
                    {lc[0]}
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 11,
                      fontWeight: 600,
                      color: C.cer,
                      background: C.c50,
                      padding: "2px 8px",
                      borderRadius: 12,
                      marginBottom: 8,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {lc[1]}
                  </div>
                  <div
                    style={{ fontSize: 13, color: C.cav, lineHeight: 1.6 }}
                  >
                    {lc[2]}
                  </div>
                </div>
              );
            })}
          </div>
          <Tb
            h={["ASAM", "Level", "Duration", "Description"]}
            r={[
              [
                "3.7",
                "Medical Detox",
                "3-10 days",
                "24/7 medically supervised withdrawal management",
              ],
              [
                "3.5",
                "Residential",
                "28-90 days",
                "On-site structured therapy and clinical programming",
              ],
              [
                "2.5",
                "PHP",
                "2-8 weeks",
                "Intensive day programming, 5-6 hours/day",
              ],
              [
                "2.1",
                "IOP",
                "4-12 weeks",
                "Structured therapy, 3 hours/day, 3-5 days/week",
              ],
              [
                "1.0",
                "Outpatient",
                "Ongoing",
                "Individual therapy, medication management, alumni support",
              ],
            ]}
          />

          <H3>Phase Model (Adult SUD Residential)</H3>
          <P>
            <span style={{ fontWeight: 600 }}>Phase 1 (Residential): </span>
            Stabilization, education on the disease model, assessment, family
            engagement begins. Structured environment with limited external
            contact.
          </P>
          <P>
            <span style={{ fontWeight: 600 }}>Phase 2 (PHP): </span>Gradual
            reintegration. Intensive examination of barriers to recovery. Clients
            rebuild relationships, develop sober support networks, and complete
            foundational 12-Step work.
          </P>
          <P>
            <span style={{ fontWeight: 600 }}>Phase 3 (IOP): </span>Three-month
            commitment to practical application of recovery skills in real-life
            situations. Employment, education, or volunteer commitments.
            Financial independence and sober routine.
          </P>
          <P mu={true}>
            This structured progression is a major differentiator. Emphasize it
            as evidence of commitment to lifelong healing, not just short-term
            stabilization.
          </P>

          <H3>Clinical vs. External Voice</H3>
          <P>
            Internal clinical communication follows 12-Step practitioner
            conventions. Everything the public sees follows the brand voice in
            Section 2.
          </P>
          <Tb
            h={["Clinical / Internal", "Public-facing"]}
            r={[
              [
                '"Addicts suffer from the mental obsession"',
                "People with SUD experience persistent, compulsive urges",
              ],
              [
                '"Dry drunk"',
                "A person who stopped using but hasn't engaged in recovery",
              ],
              [
                '"Broken"',
                "The underlying patterns and barriers that prevent lasting recovery",
              ],
              ['"Client / Patient"', "Client"],
            ]}
          />
        </Sec>

        {/* 5 LOGOS */}
        <Sec id="logo" pn="II" t="Logos and Facility Lockups">
          <H3>Primary Logos (Full Color)</H3>
          <Row gap={10}>
            {[
              { n: "Horizontal", slug: "gr-horizontal" },
              { n: "Horizontal Stacked", slug: "gr-horizontal-stacked" },
              { n: "Vertical", slug: "gr-vertical" },
              { n: "Circular Badge", slug: "gr-badge" },
            ].map(function (l) {
              return (
                <LogoDownload
                  key={l.n}
                  n={l.n}
                  slug={l.slug}
                  vertical={l.n === "Vertical"}
                  cols={2}
                />
              );
            })}
          </Row>
          <H3>Inverted / Knockout Versions</H3>
          <Row gap={10}>
            {[
              { n: "Horizontal", slug: "gr-horizontal-inv" },
              { n: "Horizontal Stacked", slug: "gr-horizontal-stacked-inv" },
              { n: "Vertical", slug: "gr-vertical-inv" },
              { n: "Circular Badge", slug: "gr-badge-inv" },
            ].map(function (l) {
              return (
                <LogoDownload
                  key={l.n + "i"}
                  n={l.n}
                  slug={l.slug}
                  dark={true}
                  vertical={l.n === "Vertical"}
                  cols={2}
                />
              );
            })}
          </Row>
          <Row>
            <Bt>Master Logo Package</Bt>
            <Bt>Logo Usage Guide</Bt>
          </Row>

          <H3>Clearing Space and Scale</H3>
          <P>
            The logo requires a minimum clear zone on all sides equal to the
            cap-height of the "G" in the wordmark. No text, imagery, or other
            graphic elements should intrude on this space. Clear space scales
            proportionally when the logo is resized.
          </P>
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 8,
            }}
          >
            {[
              {
                label: "Horizontal",
                note: 'Min. 1.5" / 144px wide',
                slug: "gr-horizontal",
              },
              {
                label: "Vertical",
                note: 'Min. 1.5" / 144px wide',
                slug: "gr-vertical",
              },
            ].map(function (v) {
              return (
                <div
                  key={v.label}
                  style={{
                    flex: "1 1 200px",
                    border: "1px solid " + C.gla,
                    borderRadius: 10,
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      color: C.bat,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 10,
                    }}
                  >
                    {v.label}
                  </div>
                  <div
                    style={{
                      position: "relative",
                      padding: "6%",
                      border: "1px dashed " + C.gam + "88",
                      borderRadius: 6,
                      width: "100%",
                      boxSizing: "border-box",
                      background: "#fff",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        fontSize: 8,
                        color: C.gam,
                        padding: "1px 4px",
                        letterSpacing: "0.06em",
                      }}
                    >
                      clear zone
                    </div>
                    <img
                      src={logoPreview(v.slug)}
                      alt={v.label + " logo"}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div style={{ fontSize: 10, color: C.bat, marginTop: 8 }}>
                    {v.note}
                  </div>
                </div>
              );
            })}
          </div>
          <Tb
            h={["Version", "Min. Width", "Clear Space Rule"]}
            r={[
              [
                "Primary Horizontal",
                '144px / 1.5"',
                "Cap-height of 'G' on all sides",
              ],
              [
                "Primary Vertical",
                '144px / 1.5"',
                "Cap-height of 'G' on all sides",
              ],
              [
                "Circular Badge (Secondary)",
                '76px / 1"',
                "Half the arch divider height on all sides",
              ],
              ["Sunrise Icon", "24px", "Proportional to icon height"],
            ]}
          />
          <P mu={true}>
            Never reproduce the logo in any typeface. Never skew, rotate, add
            effects, or recolor outside the approved palette.
          </P>

          <H3>Service Line Logos</H3>
          <LogoGrid
            cols={2}
            items={[
              ["Adult SUD", null, C.cer, "logo-sud"],
              ["Adult Mental Health", null, C.pac, "logo-mh"],
              ["Adolescent", null, C.sag, "logo-adol"],
              ["Guardian Virtual", null, null, "logo-virtual"],
            ]}
          />
          <H3>Specialty Program Logos</H3>
          <LogoGrid
            cols={2}
            items={[
              ["Immersion", null, null, "logo-immersion"],
              ["New Pathway", null, null, "logo-new-pathway"],
              ["Virtual Counseling", null, null, "logo-virtual-counseling"],
              ["Case Management", null, null, "logo-case-management"],
            ]}
          />
          <div style={{ marginTop: 16, marginBottom: 16 }}>
            <Bt>All Program Logos (ZIP)</Bt>
          </div>

          <H3>Facility Logo Lockups</H3>
          <P>
            Each facility has a unique lockup. Filter by region and toggle
            orientation/color.
          </P>
          <div
            style={{
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              marginBottom: 14,
            }}
          >
            {REGIONS.map(function (r) {
              var on = lr === r;
              return (
                <button
                  key={r}
                  onClick={function () {
                    setLr(r);
                  }}
                  style={{
                    padding: "5px 14px",
                    borderRadius: 6,
                    fontSize: 11,
                    fontWeight: on ? 600 : 400,
                    cursor: "pointer",
                    border: "none",
                    background: on ? C.mid : "rgba(8,48,69,0.07)",
                    color: on ? C.gam : C.mid,
                    letterSpacing: on ? "0.04em" : "0",
                  }}
                >
                  {r}
                </button>
              );
            })}
          </div>
          <LogoGrid
            cols={2}
            items={ff.map(function (f) {
              return [f[0], f[1], null, slugify(f[0])];
            })}
          />
          <div style={{ marginTop: 16, marginBottom: 16 }}>
            <Bt>All Facility Logos (ZIP)</Bt>
          </div>
        </Sec>

        {/* 6 COLOR */}
        <Sec id="color" pn="II" t="Color and Brand Palette">
          <H3>Primary</H3>
          <Row>
            <Sw hex={C.mid} name="Midnight" sub="Primary dark" light={true} />
            <Sw hex={C.gam} name="Gambodge" sub="Brand accent" />
          </Row>
          <H3>Service Line Accents</H3>
          <P>
            Each service line color was chosen to carry a specific emotional
            register — distinct enough to signal a different audience and
            context, unified enough to feel like one brand family.
          </P>
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 20,
            }}
          >
            {[
              {
                name: "Cerulean",
                hex: C.cer,
                svc: "Adult SUD",
                sig: "Freedom to live.",
                evoke:
                  "Deep, grounding teal. The color of open water and clear sky — spaces where breath returns. For an audience in crisis, Cerulean communicates stability and the first moment of calm after the storm.",
              },
              {
                name: "Pacific",
                hex: C.pac,
                svc: "Adult Mental Health",
                sig: "Freedom to feel.",
                evoke:
                  "A lighter, more open blue. Where Cerulean anchors, Pacific lifts. It suggests clarity of mind, emotional spaciousness, and the kind of hope that comes not from rescue but from restoration.",
              },
              {
                name: "Sage",
                hex: C.sag,
                svc: "Adolescent",
                sig: "Freedom to grow.",
                evoke:
                  "Muted green with warmth — the color of new growth, not urgency. For parents, it communicates safety and nurture. For teens, it suggests possibility and forward movement without pressure.",
              },
            ].map(function (s) {
              return (
                <div
                  key={s.name}
                  style={{
                    flex: "1 1 200px",
                    borderRadius: 10,
                    overflow: "hidden",
                    border: "1px solid " + C.gla,
                  }}
                >
                  <div style={{ height: 6, background: s.hex }} />
                  <div style={{ padding: "14px 16px" }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: s.hex,
                        marginBottom: 1,
                      }}
                    >
                      {s.name}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: C.mid,
                        fontWeight: 500,
                        marginBottom: 6,
                      }}
                    >
                      {s.svc}
                      {review && (
                        <>
                          {" · "}
                          <em
                            style={{
                              fontFamily: "'DM Serif Text',serif",
                              fontWeight: 400,
                            }}
                          >
                            {s.sig}
                          </em>
                        </>
                      )}
                    </div>
                    <div
                      style={{ fontSize: 13, color: C.cav, lineHeight: 1.6 }}
                    >
                      {s.evoke}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <H4>Cerulean (SUD)</H4>
          <Row>
            {[
              ["50", C.c50],
              ["200", C.c2],
              ["400", C.c4, 1],
              ["600", C.cer, 1],
              ["700", C.c7, 1],
              ["900", C.c9, 1],
            ].map(function (s) {
              return (
                <Sw
                  key={s[0]}
                  hex={s[1]}
                  name={s[0]}
                  sub={s[0] === "600" ? "Primary" : ""}
                  light={!!s[2]}
                />
              );
            })}
          </Row>
          <H4>Pacific (Mental Health)</H4>
          <Row>
            {[
              ["50", C.p50],
              ["200", C.p2],
              ["400", C.p4, 1],
              ["600", C.pac, 1],
              ["700", C.p7, 1],
              ["900", C.p9, 1],
            ].map(function (s) {
              return (
                <Sw
                  key={s[0]}
                  hex={s[1]}
                  name={s[0]}
                  sub={s[0] === "600" ? "Primary" : ""}
                  light={!!s[2]}
                />
              );
            })}
          </Row>
          <H4>Sage (Adolescent)</H4>
          <Row>
            {[
              ["50", C.s50],
              ["200", C.s2],
              ["400", C.s4, 1],
              ["600", C.sag, 1],
              ["700", C.s7, 1],
              ["900", C.s9, 1],
            ].map(function (s) {
              return (
                <Sw
                  key={s[0]}
                  hex={s[1]}
                  name={s[0]}
                  sub={s[0] === "600" ? "Primary" : ""}
                  light={!!s[2]}
                />
              );
            })}
          </Row>
          <H3>Interface Colors</H3>
          <Row>
            <Sw
              hex={C.pru}
              name="Prussian"
              sub="Interface accent"
              light={true}
            />
            <Sw hex={C.fro} name="Frost" sub="Primary light bg" />
            <Sw hex={C.she} name="Shell" sub="Soft neutral bg" />
            <Sw hex={C.smo} name="Smoke" sub="Secondary bg" />
            <Sw hex={C.san} name="Sand" sub="Warm neutral bg" />
            <Sw hex={C.gla} name="Glacier" sub="Accent bg" />
          </Row>
          <H3>Text Colors</H3>
          <Row>
            <Sw hex={C.eer} name="Eerie" sub="Primary text" light={true} />
            <Sw hex={C.cav} name="Cave" sub="Secondary text" light={true} />
            <Sw hex={C.bat} name="Battleship" sub="Tertiary" light={true} />
            <Sw hex={C.cad} name="Cadet" sub="Text accent" light={true} />
          </Row>
          <Bt>Color Reference Sheet</Bt>
        </Sec>

        {/* 7 TYPOGRAPHY */}
        <Sec id="typo" pn="II" t="Typography">
          <P>
            Three typefaces form the complete brand voice. Each has a distinct
            role — they are never interchangeable.
          </P>

          {/* STEM */}
          <div
            style={{
              border: "1px solid " + C.gla,
              borderRadius: 12,
              overflow: "hidden",
              marginBottom: 16,
            }}
          >
            <div style={{ height: 4, background: C.gam }} />
            <div style={{ padding: "16px 20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  marginBottom: 4,
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: C.mid,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  STEM
                </div>
                <div style={{ fontSize: 11, color: C.bat }}>
                  Brand mark font · Logo and wordmark only
                </div>
              </div>
              <div style={{ fontSize: 13, color: C.cav, lineHeight: 1.6 }}>
                Used exclusively in the Guardian Recovery logo and wordmark.{" "}
                <strong>Never</strong> use STEM for headlines, body copy, or
                general typesetting. It is a proprietary brand element, not a
                general-purpose typeface.
              </div>
            </div>
          </div>

          {/* DM Serif Text */}
          <div
            style={{
              border: "1px solid " + C.gla,
              borderRadius: 12,
              overflow: "hidden",
              marginBottom: 16,
            }}
          >
            <div style={{ height: 4, background: C.mid }} />
            <div style={{ padding: "16px 20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Serif Text',serif",
                    fontSize: 22,
                    color: C.mid,
                  }}
                >
                  DM Serif Text
                </div>
                <div style={{ fontSize: 11, color: C.bat }}>
                  Headline font · H1–H3, pull quotes, display
                </div>
              </div>
              <div
                style={{
                  fontFamily: "'DM Serif Text',serif",
                  fontSize: 14,
                  color: C.cav,
                  letterSpacing: "0.02em",
                  marginBottom: 10,
                  lineHeight: 1.8,
                }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                <br />
                abcdefghijklmnopqrstuvwxyz
                <br />
                0123456789 !@#$%&amp;*()?.,—
              </div>
              <div
                style={{
                  fontFamily: "'DM Serif Text',serif",
                  fontSize: 14,
                  color: C.cav,
                  fontStyle: "italic",
                  marginBottom: 12,
                  lineHeight: 1.8,
                }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                <br />
                abcdefghijklmnopqrstuvwxyz
                <br />
                0123456789 !@#$%&amp;*()?.,— <em>(Italic)</em>
              </div>
              <div style={{ fontSize: 13, color: C.cav, lineHeight: 1.6 }}>
                Weights: Regular, Italic. Tighten tracking (–10 to –20) at
                display sizes. Always sentence case — never all-caps in DM Serif
                Text.
              </div>
            </div>
          </div>

          {/* IBM Plex Sans */}
          <div
            style={{
              border: "1px solid " + C.gla,
              borderRadius: 12,
              overflow: "hidden",
              marginBottom: 16,
            }}
          >
            <div style={{ height: 4, background: C.cer }} />
            <div style={{ padding: "16px 20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  marginBottom: 8,
                }}
              >
                <div style={{ fontSize: 20, color: C.mid, fontWeight: 600 }}>
                  IBM Plex Sans
                </div>
                <div style={{ fontSize: 11, color: C.bat }}>
                  Body font · UI, body, captions, all-purpose
                </div>
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: C.cav,
                  letterSpacing: "0.02em",
                  marginBottom: 6,
                  lineHeight: 1.8,
                }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                <br />
                abcdefghijklmnopqrstuvwxyz
                <br />
                0123456789 !@#$%&amp;*()?.,—
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  flexWrap: "wrap",
                  marginBottom: 12,
                }}
              >
                {[
                  ["Extra Light", 200],
                  ["Light", 300],
                  ["Regular", 400],
                  ["Medium", 500],
                  ["Semi-Bold", 600],
                  ["Bold", 700],
                ].map(function (w) {
                  return (
                    <div
                      key={w[0]}
                      style={{ fontSize: 13, fontWeight: w[1], color: C.cav }}
                    >
                      {w[0]}
                    </div>
                  );
                })}
              </div>
              <div style={{ fontSize: 13, color: C.cav, lineHeight: 1.6 }}>
                Use weight variation for hierarchy — never introduce additional
                typefaces. All-caps settings use expanded tracking (+50 to
                +100).
              </div>
            </div>
          </div>

          {/* Type scale */}
          <H3>Type Scale</H3>
          <div
            style={{
              border: "1px solid " + C.gla,
              borderRadius: 12,
              padding: "20px",
              marginBottom: 16,
            }}
          >
            {[
              [
                "H1 / Display",
                62,
                "'DM Serif Text',serif",
                400,
                "Hope Starts Here.",
                "Page titles, hero headlines",
              ],
              [
                "H2 / Section",
                38,
                "'DM Serif Text',serif",
                400,
                "Brand Guidelines V2",
                "Section headers, slide titles",
              ],
              [
                "H3 / Sub-section",
                20,
                null,
                600,
                "Our Service Lines",
                "Sub-headers, pull quotes",
              ],
              [
                "Lead-in",
                15,
                null,
                500,
                "Guardian Recovery is a national provider of evidence-based care.",
                "Opening paragraphs",
              ],
              [
                "Body",
                14,
                null,
                400,
                "We build personalized treatment plans that honor each Client's unique history, goals, and circumstances.",
                "Standard paragraph text",
              ],
              [
                "Caption",
                11,
                null,
                300,
                "Source: Clinical Outcomes Report, August 2024",
                "Captions, footnotes, disclaimers",
              ],
            ].map(function (row) {
              return (
                <div
                  key={row[0]}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 16,
                    borderBottom: "1px solid " + C.gla,
                    padding: "12px 0",
                  }}
                >
                  <div
                    style={{
                      minWidth: 110,
                      fontSize: 10,
                      color: C.bat,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      flexShrink: 0,
                    }}
                  >
                    {row[0]}
                  </div>
                  <div
                    style={{
                      fontFamily: row[2] || "inherit",
                      fontSize: row[1] > 24 ? 24 : row[1],
                      fontWeight: row[3],
                      color: C.mid,
                      flex: 1,
                      lineHeight: 1.2,
                    }}
                  >
                    {row[4]}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: C.bat,
                      flexShrink: 0,
                      minWidth: 80,
                      textAlign: "right",
                    }}
                  >
                    {row[1]}pt · {row[5]}
                  </div>
                </div>
              );
            })}
          </div>

          <H3>Email Fallback Fonts</H3>
          <P>For email HTML only. Brand fonts for all other applications.</P>
          <Tb
            h={["Brand Font", "Email Fallback", "Clients"]}
            r={[
              ["DM Serif Text", "Georgia, serif", "All email clients"],
              [
                "IBM Plex Sans",
                "Arial, Helvetica, sans-serif",
                "Gmail, Outlook, Apple Mail",
              ],
            ]}
          />
        </Sec>

        {/* 8 ICONOGRAPHY */}
        <Sec id="icon" pn="II" t="Iconography">
          <P>
            Guardian Recovery's icon system uses a consistent line-icon style
            across all touchpoints. Icons communicate brand identity, service
            lines, clinical concepts, and levels of care quickly and accessibly.
          </P>
          <Cd t="Style">
            Line icons with rounded terminals and consistent stroke weight.
            Modern, clean, approachable. Never mix filled and line styles within
            the same layout.
          </Cd>
          <Cd t="Color">
            Midnight or Frost depending on background. Gambodge for accent and
            active states. Service line accent colors for service-specific sets.
          </Cd>
          <Cd t="Consistency">
            Same stroke weight, corner radius, and sizing within any layout. Do
            not combine icons from different style families or introduce
            third-party icon sets without brand review.
          </Cd>

          <H3>Master Brand Icons</H3>
          <P>
            The core brand marks used independently when Guardian Recovery
            context is established in surrounding content.
          </P>
          <Row gap={10}>
            {[
              {
                label: "Sunrise Icon",
                note: "Primary standalone mark",
                img: img("icons/sunrise.svg"),
                slug: "sunrise",
              },
              {
                label: "Sunrise (Gambodge)",
                note: "On Midnight / dark backgrounds",
                img: img("icons/sunrise-gambodge.svg"),
                slug: "sunrise-gambodge",
              },
              {
                label: "Sunrise (Frost)",
                note: "Knockout / inverted",
                img: img("icons/sunrise-frost.svg"),
                slug: "sunrise-frost",
              },
            ].map(function (i) {
              return (
                <div
                  key={i.label}
                  style={{
                    border: "1px solid " + C.gla,
                    borderRadius: 10,
                    padding: 14,
                    textAlign: "center",
                    flex: "1 1 150px",
                    minWidth: 150,
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: C.smo,
                      margin: "0 auto 8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={i.img}
                      alt={i.label}
                      style={{ width: 36, height: 36, objectFit: "contain" }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: C.mid,
                      marginBottom: 2,
                    }}
                  >
                    {i.label}
                  </div>
                  <div style={{ fontSize: 10, color: C.bat, marginBottom: 8 }}>
                    {i.note}
                  </div>
                  <IconDownload ac={C.gam} slug={i.slug} />
                </div>
              );
            })}
          </Row>

          <H3>Service Line Icons</H3>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              {
                label: "Adult SUD",
                ac: C.cer,
                primary: "SUD Icon",
                img: img("icons/icon-sud.svg"),
                slug: "icon-sud",
              },
              {
                label: "Adult Mental Health",
                ac: C.pac,
                primary: "Mental Health Icon",
                img: img("icons/icon-mh.svg"),
                slug: "icon-mh",
              },
              {
                label: "Adolescent",
                ac: C.sag,
                primary: "Adolescent Icon",
                img: img("icons/icon-adol.svg"),
                slug: "icon-adol",
              },
              {
                label: "Virtual",
                ac: C.pru,
                primary: "Virtual Icon",
                img: img("icons/icon-virtual.svg"),
                slug: "icon-virtual",
              },
            ].map(function (sl) {
              return (
                <div
                  key={sl.label}
                  style={{
                    flex: "1 1 140px",
                    border: "2px solid " + sl.ac,
                    borderRadius: 10,
                    padding: 14,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 8,
                      background: sl.ac + "18",
                      border: "1.5px solid " + sl.ac,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={sl.img}
                      alt={sl.label}
                      style={{ width: 32, height: 32, objectFit: "contain" }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: sl.ac,
                        marginBottom: 2,
                      }}
                    >
                      {sl.label}
                    </div>
                    <div style={{ fontSize: 10, color: C.bat }}>
                      {sl.primary}
                    </div>
                  </div>
                  <IconDownload ac={sl.ac} slug={sl.slug} />
                </div>
              );
            })}
          </div>
          <div
            style={{
              fontSize: 11,
              color: C.bat,
              lineHeight: 1.6,
              marginTop: 12,
            }}
          >
            Condition and program sub-icons will be introduced in V3.
          </div>
        </Sec>

        {/* 9 PHOTOGRAPHY */}
        <Sec id="photo" pn="II" t="Photography and Imagery">
          <P>
            Photography is the most emotionally immediate element of the brand.
            Before anyone reads a headline, they see a face, a place, a moment.
            Every image must instantly communicate:{" "}
            <em>
              this is a place of warmth, safety, and genuine human connection.
            </em>
          </P>

          <H3>Core Principles</H3>
          <Cd t="Lighting">
            Well-balanced natural light. Underexposure feels depressing.
            Overexposure feels sterile. The sweet spot is warm light that makes
            people and spaces feel inviting.
          </Cd>
          <Cd t="Expressions">
            Candid shots, genuine smiles, active listening, eye contact. Tighter
            crops draw focus to emotion. Avoid anything staged or posed.
          </Cd>
          <Cd t="Diversity">
            Always — across age, ethnicity, gender, and body type — within the
            context of the audience and geographic relevance.
          </Cd>
          <Cd t="Settings">
            Everyday surroundings or Guardian Recovery facilities. No dramatic
            scenery that distracts from the human element.
          </Cd>

          <H3>Rounded-Corner Framing</H3>
          <P>
            A defining visual signature. Softens the clinical feel and creates
            warmth. Corner radius under 10% of the shortest side — smaller
            blocks use proportionally smaller radii. Focal points may bleed from
            up to two edges. Use brand accent colors (Glacier, Pacific, Midnight
            gradient) for background fills behind frames.
          </P>
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 16,
            }}
          >
            {[
              {
                bg: C.gla,
                label: "Glacier fill",
                img: img("photos/framing-glacier.jpg"),
              },
              {
                bg: C.p50,
                label: "Pacific 50 fill",
                img: img("photos/framing-pacific.jpg"),
              },
              {
                bg: C.mid,
                label: "Midnight fill",
                img: img("photos/framing-midnight.jpg"),
              },
            ].map(function (s, i) {
              return (
                <div
                  key={i}
                  style={{
                    flex: "1 1 140px",
                    height: 100,
                    background: s.bg,
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "70%",
                      height: "70%",
                      borderRadius: 10,
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(8,48,69,0.12)",
                      border: "1px dashed " + (s.bg === C.mid ? C.cad : C.gla),
                    }}
                  >
                    <img
                      src={s.img}
                      alt={s.label}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={function (e) {
                        e.target.style.display = "none";
                        e.target.parentNode.innerHTML =
                          "<span style='font-size:9px;color:" +
                          (s.bg === C.mid ? C.cad : C.bat) +
                          "'>" +
                          s.label +
                          "</span>";
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <H3>Photography by Medium</H3>
          <Cd t="Website and landing pages">
            Hero images should feel like a moment of hope or connection — people
            looking forward with calm confidence, families embracing, supportive
            gestures. Every landing page hero must include a person. The human
            element drives conversion.
          </Cd>
          <Cd t="Social media">
            Authentic, in-the-moment. Facility photos, team spotlights,
            recovery-positive imagery (with consent), branded quote cards.
            Vertical/square crops optimized for mobile. Avoid overly polished or
            commercial-feeling imagery.
          </Cd>
          <Cd t="BD presentations">
            Cover slides feature individual portraits or couples in warm,
            professional settings. Facility pages pair one exterior, one
            interior, and one human moment. Rounded-corner framing with the
            left-half layout from the BD deck template.
          </Cd>
          <Cd t="Print (brochures, one-pagers, trifolds)">
            300 DPI minimum, CMYK formatted. Rounded-corner framing. Allow for
            text overlay — images should have open space or natural gradient
            areas. Service-line photography matched to the audience.
          </Cd>
          <Cd t="Facility signage and environmental">
            Actual facility photography only. Professionally shot, current
            (refreshed every 2 years minimum). Exteriors in good weather.
            Interiors showing welcoming common spaces. No clinical equipment or
            institutional-looking spaces.
          </Cd>
          <Cd t="Digital advertising (display, Meta, video)">
            Faces perform best. Square and vertical for social, horizontal for
            display. Avoid text-heavy images. Video thumbnails must feature a
            person.
          </Cd>
          <Cd t="Email marketing">
            Single strong hero per email, ideally a person in a warm setting.
            Under 200KB. No background images (fail in many clients).
            Rounded-corner framing via HTML/CSS where supported.
          </Cd>
          <Cd t="Banners and large format">
            High-resolution, extended bleed. Test readability of overlaid text
            at actual print size. Ensure faces are not cropped awkwardly at seam
            lines on multi-panel backdrops.
          </Cd>
          <Cd t="Rack cards">
            Small format demands simple imagery. Single subject or tight crop.
            Text overlay area essential. High contrast for readability at small
            scale.
          </Cd>
          <Cd t="Event and conference">
            Capture photography at every major event. Add to the brand photo
            library with consent documentation. Event photos must match
            lighting, candor, and diversity standards.
          </Cd>

          <H3>Service-Line Specific</H3>
          <Cd ac={C.cer} t="Adult SUD">
            Warm, calming. Candid adult photography. Sunrise motif connections
            where appropriate. People in reflective or supported moments. Avoid
            imagery suggesting active crisis.
          </Cd>
          <Cd ac={C.pac} t="Adult Mental Health">
            Lighter, more aspirational. Diverse professionals and everyday
            people in non-clinical settings. Natural light, calm environments,
            moments of reflection or connection. The audience is seeking
            improvement, not rescue.
          </Cd>
          <Cd ac={C.sag} t="Adolescent">
            Age-appropriate. Never stereotypical "troubled teen" imagery. Teens
            in positive, safe environments with supportive adults and peers.
            Family-centered compositions. All minor imagery requires documented
            parental/guardian consent and legal review.
          </Cd>

          <H3>Restrictions</H3>
          <Tb
            h={["Never", "Why"]}
            r={[
              ["Client images without documented consent", "HIPAA compliance"],
              [
                "Generic stock disconnected from treatment context",
                "Inauthenticity undermines trust",
              ],
              [
                "Depictions of substance use, paraphernalia, or triggering imagery",
                "Patient safety and compliance",
              ],
              [
                "Images of minors without parental/guardian consent",
                "Legal and ethical requirement",
              ],
              [
                "Imagery reinforcing addiction stereotypes",
                "Person-first brand values",
              ],
              [
                "Staff/clinician images of non-GR employees without consent",
                "Brand integrity",
              ],
            ]}
          />
        </Sec>

        {/* 9 GRAPHICS */}
        <Sec id="gfx" pn="II" t="Graphic Elements and Patterns">
          <H3>Brand Pattern</H3>
          <P>
            A repeating geometric texture based on the sunrise motif. The
            pattern is a texture — never a focal element. It creates depth and
            brand recognition without competing with content.
          </P>
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 16,
            }}
          >
            {[
              {
                bg: C.mid,
                img: img("graphics/pattern-on-midnight.png"),
                label: "On Midnight (10–20% opacity)",
              },
              {
                bg: C.fro,
                img: img("graphics/pattern-on-frost.png"),
                label: "On Frost (5–10% opacity)",
              },
              {
                bg: C.gla,
                img: img("graphics/pattern-on-glacier.png"),
                label: "On Glacier (5–15% opacity)",
              },
            ].map(function (s) {
              return (
                <div
                  key={s.label}
                  style={{
                    flex: "1 1 160px",
                    height: 90,
                    background: s.bg,
                    borderRadius: 10,
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: 10,
                  }}
                >
                  <img
                    src={s.img}
                    alt={s.label}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.8,
                    }}
                    onError={function (e) {
                      e.target.style.display = "none";
                    }}
                  />
                  <div
                    style={{
                      fontSize: 9,
                      color: s.bg === C.mid ? C.cad : C.bat,
                      position: "relative",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
          <H4>Where the Pattern Appears</H4>
          <Tb
            h={["Context", "Usage"]}
            r={[
              [
                "Section dividers",
                "Low opacity over Midnight or Frost backgrounds",
              ],
              ["Title slide backgrounds", "Full-bleed, 10–20% on Midnight"],
              [
                "Behind rounded-corner image frames",
                "Subtle texture fill in Glacier or Pacific 50",
              ],
              ["Website hero areas", "Pattern band at page transitions"],
              [
                "Print folder covers",
                "Full-bleed Midnight with pattern at 15%",
              ],
              [
                "Business card backs",
                "Midnight wrap with pattern + 'Hope Starts Here.'",
              ],
            ]}
          />
          <P mu={true}>
            Never at full opacity competing with foreground. Do not stretch,
            skew, or alter proportions.
          </P>

          <H3>Arch / Chevron Motif</H3>
          <P>
            The upward-pointing arch appears as a section divider and accent
            mark in headers and presentations. Always Gambodge (#FFAD00).
            Proportions match the logo's arch. Use sparingly — one per section.
            Never in a color other than Gambodge.
          </P>
          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              padding: "16px 20px",
              background: C.smo,
              borderRadius: 10,
              marginBottom: 16,
            }}
          >
            <img
              src={img("graphics/arch-divider.svg")}
              alt="Arch motif"
              style={{ width: 55, height: 19 }}
            />
            <div style={{ fontSize: 13, color: C.cav }}>
              Section opener — appears above H2 headings in print and
              presentations
            </div>
          </div>

          <H3>Gradient Treatments</H3>
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 16,
            }}
          >
            {[
              {
                from: C.mid,
                to: C.pru,
                label: "Midnight → Prussian",
                note: "Dark title slides",
              },
              {
                from: C.gla,
                to: C.fro,
                label: "Glacier → Frost",
                note: "Light sections",
              },
            ].map(function (g) {
              return (
                <div
                  key={g.label}
                  style={{
                    flex: "1 1 160px",
                    height: 70,
                    borderRadius: 10,
                    background:
                      "linear-gradient(135deg," + g.from + "," + g.to + ")",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 10,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: g.from === C.gla ? C.mid : "#fff",
                    }}
                  >
                    {g.label}
                  </div>
                  <div
                    style={{
                      fontSize: 9,
                      color: g.from === C.gla ? C.bat : C.cad,
                    }}
                  >
                    {g.note}
                  </div>
                </div>
              );
            })}
          </div>
          <P mu={true}>
            Subtle and directional only. Never applied to the logo. Never
            obscuring faces in photography.
          </P>
        </Sec>

        {/* 11 FACILITY */}
        <Sec id="fac" pn="III" t="Facility Branding">
          <P>
            Official name on signage. Horizontal logo preferred. "Hope Starts
            Here." in lobbies. Minimal branding in treatment spaces. No phone
            numbers on vehicles. Photo libraries refreshed every 2 years.
          </P>
          <P mu={true}>
            V3 will expand this section with exterior signage specifications,
            lobby display dimensions, wayfinding standards, interior
            environmental branding guidelines, and vehicle/fleet marking
            standards.
          </P>
        </Sec>

        {/* 12 BD */}
        <Sec id="bd" pn="III" t="BD Team Resources">
          <H3>Presentation Deck</H3>
          <P>
            The master BD deck follows the "Your Partner in Behavioral Health"
            positioning. Includes history, outcomes, program regions, facility
            pages, and the "Understanding Your World" discovery questions. Rep
            contact slide is customizable.
          </P>
          <Row>
            <Bt v="order">Download PPTX</Bt>
            <Bt
              v="preview"
              oc={function () {
                openPreview("BD Presentation Deck");
              }}
            >
              Preview Deck
            </Bt>
          </Row>

          <H3>General</H3>
          <P>
            Materials available to all BD reps regardless of service line or
            facility assignment.
          </P>
          <Row gap={10}>
            <div
              style={{
                border: "1px solid " + C.gla,
                borderRadius: 10,
                overflow: "hidden",
                flex: "1 1 190px",
                minWidth: 190,
              }}
            >
              <Bx
                t="Rep Sticker Preview"
                h={90}
                img={img("photos/rep-sticker-preview.jpg")}
              />
              <div style={{ padding: "10px 12px" }}>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: C.mid,
                    marginBottom: 2,
                  }}
                >
                  BD Rep Sticker
                </div>
                <div style={{ fontSize: 11, color: C.bat, marginBottom: 8 }}>
                  Name + QR code · Per rep
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <Bt
                    v="preview"
                    oc={function () {
                      openPreview("BD Rep Sticker");
                    }}
                  >
                    Preview
                  </Bt>
                  <Bt v="order">Order</Bt>
                </div>
              </div>
            </div>
            {[
              ["Business Cards", "Per rep"],
              ["Folders", "Midnight + pattern"],
              ["Apparel", "Polos, quarter-zips"],
              ["Merchandise", "Pens, bottles"],
            ].map(function (i) {
              return <Pc key={i[0]} t={i[0]} d={i[1]} />;
            })}
          </Row>

          <H3>Service Line Collateral</H3>
          <P>Select a service line to browse its collateral set.</P>
          <CollateralNav
            categories={[
              { id: "sud", label: "Adult SUD", ac: C.cer },
              { id: "mh", label: "Adult Mental Health", ac: C.pac },
              { id: "adol", label: "Adolescent", ac: C.sag },
              { id: "virtual", label: "Virtual", ac: C.pru },
            ]}
          />

          <H3>Facility Collateral</H3>
          <P>Select a region then a facility to browse available collateral.</P>
          <CollateralNav
            categories={REGIONS.filter(function (r) {
              return r !== "All";
            }).map(function (region) {
              var facilities = FACS.filter(function (f) {
                return f[2] === region;
              });
              return {
                id: region,
                label: region,
                ac: null,
                sub: facilities.map(function (f) {
                  return { id: f[0], label: f[5] };
                }),
              };
            })}
          />

          <H3>Regional Collateral</H3>
          <P>Select a region to browse its collateral set.</P>
          <CollateralNav
            types={REGIONAL_COLLATERAL_TYPES}
            categories={REGIONS.filter(function (r) {
              return r !== "All";
            }).map(function (region) {
              return { id: region, label: region, ac: null };
            })}
          />

          <H3>Physical Materials</H3>
          <Row gap={10}>
            {[
              ["Pull-Up Banners", "Master + facility"],
              ["Backdrops", "Logo on Midnight"],
              ["Branded Tablecloth", "Midnight/Gambodge"],
              ["Name Badges", "IBM Plex Sans, Midnight on Frost"],
              ["Event Signage", "Facility + master"],
            ].map(function (i) {
              return <Pc key={i[0]} t={i[0]} d={i[1]} />;
            })}
          </Row>
        </Sec>

        {/* 13 EXEC */}
        <Sec id="exec" pn="III" t="Executive Resources">
          <ExecGate />
        </Sec>

        {/* 14 DIGITAL */}
        <Sec id="dig" pn="III" t="Digital Standards">
          <P>
            Guardian Recovery's digital presence spans a 75+ page website, paid
            search across six states, organic social, email marketing via
            Salesforce Marketing Cloud, and a growing telehealth presence
            through Guardian Virtual. Every digital touchpoint must feel like a
            single, consistent brand.
          </P>

          <H3>Website</H3>
          <Cd t="guardianrecovery.com">
            Primary logo in site header. DM Serif Text for page titles and
            section headers. IBM Plex Sans for body, navigation, buttons, and
            forms. Service line accent colors on service-line-specific pages.
            Gambodge for all primary CTAs. Rounded-corner photo framing on all
            lead images. Brand pattern on section dividers and hero areas. Every
            landing page requires a clear above-the-fold CTA.
          </Cd>
          <Tb
            h={["Element", "Standard"]}
            r={[
              ["Header logo", "Primary horizontal, links to homepage"],
              ["Page title", "DM Serif Text, 38–62pt, Midnight"],
              ["Section headers", "DM Serif Text or IBM Plex Sans Semi-Bold"],
              ["Body copy", "IBM Plex Sans Regular, 15–17px, Eerie on white"],
              [
                "Primary CTA",
                "Gambodge background, Midnight text, rounded corners",
              ],
              [
                "Service-line pages",
                "Accent color for active tab, section borders, icon fills",
              ],
              ["Images", "Rounded-corner framing, brand pattern in dividers"],
            ]}
          />

          <H3>Social Media</H3>
          <Cd t="National accounts">
            Secondary (circular) logo on Midnight as profile image. Quarterly
            cover rotation. Content: recovery-positive messaging, educational
            content, facility highlights, team spotlights, outcomes data.
          </Cd>
          <Cd t="Facility accounts">
            Same profile image for unified national presence. Local content:
            community events, facility updates, local spotlights. All brand
            standards apply.
          </Cd>
          <P mu={true}>
            Rules: No Client-identifiable content without consent. No stock
            photography. No outcome claims without approved proof points. All
            paid creative reviewed by marketing. Person-first language per
            Section 2.
          </P>

          <H3>Email Marketing</H3>
          <P>
            Via Salesforce Marketing Cloud. Header: primary logo centered on
            white. Body: IBM Plex Sans 15–17px, Eerie on white. Headlines: DM
            Serif Text or IBM Plex Sans Semi-Bold in Midnight. CTAs: Gambodge
            background, Midnight text, rounded corners. Service line accents for
            section dividers on service-specific sends. Footer: website, phone,
            unsubscribe, privacy disclaimer.
          </P>

          <H3>Digital Advertising</H3>
          <Cd t="Google Ads (LegitScript certified)">
            Never guarantee outcomes. "Rehab" and "detox" acceptable in
            headlines matching search intent. Landing page must deliver exactly
            what the ad promises. Guardian holds LegitScript certification —
            losing it shuts down the entire paid search program.
          </Cd>
          <Cd t="Display">
            Brand colors, typography, photography standards throughout. Gambodge
            CTAs. Rounded-corner photos. Logo on all creative.
          </Cd>
          <Cd t="Meta / Paid social">
            Photography guidelines apply. No clinical or triggering imagery.
            Carousels may highlight multiple facilities or levels of care. All
            video must be captioned.
          </Cd>

          <H3>Digital Meeting Backgrounds</H3>
          <P>
            Branded virtual backgrounds for Zoom, Google Meet, and Microsoft
            Teams. Used across business development calls, internal team
            meetings, telehealth sessions, and external presentations. A
            unified background reinforces brand consistency on every video
            call and signals a professional, cohesive Guardian presence.
          </P>
          <Cd t="Standard library">
            Midnight wrap with the brand pattern at 10–15% opacity, primary
            horizontal logo positioned bottom-right with clear space
            preserved. Frost variant for lighter, neutral framing. Service
            line variants (Cerulean, Pacific, Sage) available for
            line-specific outreach.
          </Cd>
          <Cd t="Telehealth / Guardian Virtual">
            Calming, neutral framing — Frost or low-saturation Pacific.
            Avoid heavy pattern, busy gradients, or clinical imagery.
            Background must not compete with the clinician on camera.
          </Cd>
          <Tb
            h={["Use case", "Recommended background"]}
            r={[
              ["BD / external calls", "Midnight + pattern, logo bottom-right"],
              ["Internal team meetings", "Frost or Midnight, logo optional"],
              ["Telehealth sessions", "Frost or low-saturation Pacific, no pattern"],
              ["Webinars / presentations", "Midnight + Gambodge accent bar"],
            ]}
          />
          <P mu={true}>
            Specs: 1920×1080 px (16:9), JPG or PNG, RGB color space. Keep
            logo, text, and key visual elements out of the lower-center
            third so they aren't covered by the video tile or speaker name.
          </P>
          <Row>
            <Bt>Zoom Backgrounds</Bt>
            <Bt>Google Meet Backgrounds</Bt>
            <Bt>Teams Backgrounds</Bt>
          </Row>

          <H3>Video and Motion Graphics</H3>
          <Cd t="Brand presence">
            Logo on opening and closing frames. Lower thirds: IBM Plex Sans on
            semi-transparent Midnight bar with Gambodge accent. Closing frame:
            logo + tagline + CTA.
          </Cd>
          <Cd t="Tone and music">
            Warm, confident, human. Conversational, never scripted. Music should
            be warm, hopeful, and understated — no dramatic manipulation. No
            Clients on camera without documented consent.
          </Cd>

          <Row>
            <Bt>Social Templates</Bt>
            <Bt>Email Templates</Bt>
            <Bt>Video Files</Bt>
          </Row>
        </Sec>

        {/* 15 PRINT */}
        <Sec id="print" pn="III" t="Print and Collateral">
          <H3>Brochures</H3>
          <P>
            Three levels: brand, service-line, facility. Two-part About:
            emotional then credentials.
          </P>
          <H3>Family Resources</H3>
          <P>
            Warmest in the system. DM Serif Text headers, 15pt minimum, warm
            photography.
          </P>
          <P mu={true}>
            V3 will expand this section with detailed print specifications,
            paper stock guidelines, finish options, bleed and margin standards,
            and vendor submission requirements for all collateral types.
          </P>
        </Sec>

        {/* ASSET HUB */}
        <Sec id="hub" t="Asset Hub">
          <P>
            The single source for all brand assets, templates, and print
            ordering. Download files directly or order physical materials
            through the primary vendor link.
          </P>

          <H3>Digital Assets</H3>
          <div
            style={{
              display: "grid",
              gap: 10,
              gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))",
              marginBottom: 20,
            }}
          >
            {[
              ["Master Logos", "SVG, PNG, EPS"],
              ["Facility Logos", "All 18, H+V"],
              ["Icons", "SUD, MH, Adolescent"],
              ["Color Reference", "Hex, RGB, PMS"],
              ["Brand Pattern", "SVG, PNG"],
              ["Fonts", "Files + license"],
              ["Guidelines", "Full PDF"],
              ["Photography Guide", "Standards + criteria"],
              ["Email Templates", "SFMC-ready"],
              ["Social Templates", "All formats"],
              ["Presentation Templates", "PPTX + Slides"],
            ].map(function (i) {
              return (
                <div
                  key={i[0]}
                  style={{
                    border: "1px solid " + C.gla,
                    borderRadius: 10,
                    padding: 14,
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: C.mid,
                      marginBottom: 2,
                    }}
                  >
                    {i[0]}
                  </div>
                  <div style={{ fontSize: 11, color: C.bat, marginBottom: 8 }}>
                    {i[1]}
                  </div>
                  <Bt>Download</Bt>
                </div>
              );
            })}
          </div>
          <H3>Print Ordering</H3>
          <div
            style={{
              display: "grid",
              gap: 10,
              gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))",
              marginBottom: 20,
            }}
          >
            {[
              ["Business Cards", "Per rep"],
              ["Rep Stickers", "Name + QR"],
              ["Folders", "Midnight + pattern"],
              ["Banners", "Master + facility"],
              ["Stationery", "Letterhead + envelopes"],
              ["Apparel", "Polos, quarter-zips"],
              ["Merchandise", "Pens, bottles"],
              ["Trifolds", "By service line"],
              ["Rack Cards", "By facility"],
            ].map(function (i) {
              return (
                <div
                  key={i[0]}
                  style={{
                    border: "1px solid " + C.gla,
                    borderRadius: 10,
                    padding: 14,
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: C.mid,
                      marginBottom: 2,
                    }}
                  >
                    {i[0]}
                  </div>
                  <div style={{ fontSize: 11, color: C.bat, marginBottom: 8 }}>
                    {i[1]}
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 5 }}
                  >
                    <Bt v="order">Order Now</Bt>
                    <a
                      href="#"
                      onClick={function (e) {
                        e.preventDefault();
                      }}
                      style={{
                        fontSize: 10,
                        color: C.bat,
                        textDecoration: "underline",
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                    >
                      Alternative vendor
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <H3>Stationery</H3>

          <H4>Letterhead</H4>
          <Row gap={10}>
            <LetterheadCard
              title="General Letterhead"
              subtitle="Guardian Recovery — corporate"
              slug="general"
              wide={true}
            />
          </Row>
          <Row gap={10}>
            {FACS.map(function (f) {
              return (
                <LetterheadCard
                  key={f[0]}
                  title={f[0]}
                  subtitle={f[1]}
                  slug={slugify(f[0])}
                />
              );
            })}
          </Row>

          <H4>Other Stationery</H4>
          <Row gap={10}>
            {[
              ["Envelopes", "Primary logo"],
              ["Notecards", "Secondary logo"],
            ].map(function (i) {
              return <Pc key={i[0]} t={i[0]} d={i[1]} />;
            })}
          </Row>

          <H3>Need Custom Creative Work?</H3>
          <a
            href="https://creative.guardianrecovery.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              border: "1px solid " + C.gla,
              borderLeft: "4px solid " + C.gam,
              borderRadius: 10,
              padding: "16px 18px",
              textDecoration: "none",
              background: C.she,
              transition: "box-shadow 0.15s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: "1 1 280px" }}>
                <div
                  style={{
                    fontFamily: "'DM Serif Text',serif",
                    fontSize: 18,
                    color: C.mid,
                    marginBottom: 4,
                  }}
                >
                  Creative Request Portal
                </div>
                <div
                  style={{ fontSize: 13, color: C.cav, lineHeight: 1.55 }}
                >
                  Submit a request for custom design, copywriting,
                  campaign creative, or any asset not already in this
                  hub. The internal Creative team reviews each request
                  and partners with you on scope, timeline, and brand
                  alignment.
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: C.bat,
                    marginTop: 6,
                    letterSpacing: "0.02em",
                  }}
                >
                  creative.guardianrecovery.com
                </div>
              </div>
              <div
                style={{
                  background: C.gam,
                  color: C.mid,
                  padding: "10px 18px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                Submit a Request →
              </div>
            </div>
          </a>
        </Sec>

        {/* APPENDICES */}
        <Sec id="app" t="Appendices">
          <H3>Accreditations and Recognition</H3>
          <Tb
            h={["Credential", "Issuing Body", "Scope"]}
            r={[
              [
                "Joint Commission Accreditation",
                "The Joint Commission",
                "All clinical facilities — behavioral health gold standard",
              ],
              [
                "LegitScript Certification",
                "LegitScript",
                "Required for Google Ads — addiction treatment advertising",
              ],
              [
                "State Licensure",
                "Per state health department",
                "All facilities licensed in their operating state",
              ],
              [
                "ASAM Membership",
                "American Society of Addiction Medicine",
                "Clinical framework and standards alignment",
              ],
              [
                "SAMHSA Recognition",
                "Substance Abuse and Mental Health Services Administration",
                "Federal treatment directory listing",
              ],
            ]}
          />

          <H3>Proof Points</H3>
          <P mu={true}>
            Source: Guardian Recovery Clinical Outcomes Report, August 2024.
            Measured with TEA, PHQ-9, and GAD-7.
          </P>
          <Tb
            h={["Metric", "Result"]}
            r={[
              ["Depression symptom reduction", "67%, sustained at one year"],
              ["Anxiety symptom reduction", "65%, sustained at one year"],
              ["Substance use and overall well-being", "55% improvement"],
              ["Overall sustained improvement", "Over 60% at one year"],
            ]}
          />
          <P mu={true}>
            "These aren't just discharge statistics. These are real, lasting
            changes in people's lives."
          </P>

          <H3>Organizational Scale</H3>
          <Tb
            h={["Metric", "Approved language"]}
            r={[
              ["Facilities", "18 locations including virtual"],
              ["States", "Six states (NJ, FL, ME, NH, CO, TX) + virtual in PA"],
              [
                "Service lines",
                "Three: Adult SUD, Adult Mental Health, Adolescent",
              ],
              ["Accreditation", "Accredited by The Joint Commission"],
              ["Founded", "2007"],
              ["Virtual", "Available in seven states"],
            ]}
          />

          <H3>Employer and BD Proof Points</H3>
          <Tb
            h={["Claim", "Source"]}
            r={[
              [
                "Employees in recovery save employers ~$8,500/year",
                "Goplerud, 2017",
              ],
              [
                "Replacing an employee costs 50–200% of annual salary",
                "Boushey & Glynn, 2012",
              ],
              [
                "Treatment support leads to 91% reduction in absenteeism",
                "McLellan et al., 2020",
              ],
              ["70% of people with SUD are employed", "SAMHSA, 2023"],
              ["Only 10–13% who need SUD treatment receive it", "SAMHSA, 2023"],
            ]}
          />
        </Sec>

        <div style={{ textAlign: "center", padding: "40px 0 90px" }}>
          <img
            src={img("logos/logo-secondary.svg")}
            alt="Guardian Recovery"
            style={{ height: 53, marginBottom: 12, objectFit: "contain" }}
          />
          <div style={{ fontSize: 11, color: C.bat }}>
            Guardian Recovery Brand Guidelines V2 · April 2026 · Confidential
          </div>
        </div>
      </main>
      <a
        href="https://creative.guardianrecovery.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 120,
          background: C.gam,
          color: C.mid,
          padding: "12px 20px",
          borderRadius: 999,
          fontSize: 13,
          fontWeight: 600,
          textDecoration: "none",
          letterSpacing: "0.01em",
          boxShadow: "0 6px 20px rgba(8,48,69,0.25)",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 15, lineHeight: 1 }}>✦</span>
        Need Custom Creative Work?
      </a>
    </div>
    </ReviewContext.Provider>
  );
}
