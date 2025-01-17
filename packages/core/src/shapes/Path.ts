import * as ad from "types/ad";
import { Arrow, Fill, Named, Shape, Stroke } from "types/shapes";
import { PathDataV } from "types/value";
import { boolV, floatV, noPaint, pathDataV, strV } from "utils/Util";
import { Canvas, Context, sampleColor } from "./Samplers";

export interface PathProps extends Named, Stroke, Fill, Arrow {
  d: PathDataV<ad.Num>;
}

export const samplePath = (context: Context, _canvas: Canvas): PathProps => ({
  name: strV("defaultPath"),
  style: strV(""),
  strokeWidth: floatV(1),
  strokeStyle: strV("solid"),
  strokeColor: sampleColor(context),
  strokeDasharray: strV(""),
  fillColor: noPaint(),
  startArrowheadSize: floatV(1),
  startArrowhead: strV("none"),
  flipStartArrowhead: boolV(false),
  endArrowheadSize: floatV(1),
  endArrowhead: strV("none"),
  d: pathDataV([]),
  ensureOnCanvas: boolV(true),
});

export type Path = Shape & { shapeType: "Path" } & PathProps;

export const makePath = (
  context: Context,
  canvas: Canvas,
  properties: Partial<PathProps>
): Path => ({
  ...samplePath(context, canvas),
  ...properties,
  shapeType: "Path",
});
