import React, { FC, memo } from 'react';
import LightbulbAutoOutlineSvg from '../svg/lightbulb-auto-outline.svg';

export interface ILightbulbAutoOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbAutoOutlineIcon: FC<ILightbulbAutoOutlineIconProps> = memo(props => {
  return <LightbulbAutoOutlineSvg {...props} />;
});
