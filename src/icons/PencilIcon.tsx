import React, { FC, memo } from 'react';
import PencilSvg from '../svg/pencil.svg';

export interface IPencilIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilIcon: FC<IPencilIconProps> = memo(props => {
  return <PencilSvg {...props} />;
});
