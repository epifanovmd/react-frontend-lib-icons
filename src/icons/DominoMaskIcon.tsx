import React, { FC, memo } from 'react';
import DominoMaskSvg from '../svg/domino-mask.svg';

export interface IDominoMaskIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DominoMaskIcon: FC<IDominoMaskIconProps> = memo(props => {
  return <DominoMaskSvg {...props} />;
});
