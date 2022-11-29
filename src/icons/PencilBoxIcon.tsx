import React, { FC, memo } from 'react';
import PencilBoxSvg from '../svg/pencil-box.svg';

export interface IPencilBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilBoxIcon: FC<IPencilBoxIconProps> = memo(props => {
  return <PencilBoxSvg {...props} />;
});
