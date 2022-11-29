import React, { FC, memo } from 'react';
import PoundBoxSvg from '../svg/pound-box.svg';

export interface IPoundBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PoundBoxIcon: FC<IPoundBoxIconProps> = memo(props => {
  return <PoundBoxSvg {...props} />;
});
