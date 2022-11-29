import React, { FC, memo } from 'react';
import ShakerOutlineSvg from '../svg/shaker-outline.svg';

export interface IShakerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShakerOutlineIcon: FC<IShakerOutlineIconProps> = memo(props => {
  return <ShakerOutlineSvg {...props} />;
});
