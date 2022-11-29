import React, { FC, memo } from 'react';
import TempleHinduOutlineSvg from '../svg/temple-hindu-outline.svg';

export interface ITempleHinduOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TempleHinduOutlineIcon: FC<ITempleHinduOutlineIconProps> = memo(props => {
  return <TempleHinduOutlineSvg {...props} />;
});
