import React, { FC, memo } from 'react';
import GuyFawkesMaskSvg from '../svg/guy-fawkes-mask.svg';

export interface IGuyFawkesMaskIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GuyFawkesMaskIcon: FC<IGuyFawkesMaskIconProps> = memo(props => {
  return <GuyFawkesMaskSvg {...props} />;
});
