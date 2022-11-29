import React, { FC, memo } from 'react';
import PencilOutlineSvg from '../svg/pencil-outline.svg';

export interface IPencilOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilOutlineIcon: FC<IPencilOutlineIconProps> = memo(props => {
  return <PencilOutlineSvg {...props} />;
});
