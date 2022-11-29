import React, { FC, memo } from 'react';
import BinocularsSvg from '../svg/binoculars.svg';

export interface IBinocularsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BinocularsIcon: FC<IBinocularsIconProps> = memo(props => {
  return <BinocularsSvg {...props} />;
});
