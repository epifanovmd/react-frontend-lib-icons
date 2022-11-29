import React, { FC, memo } from 'react';
import PencilPlusOutlineSvg from '../svg/pencil-plus-outline.svg';

export interface IPencilPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilPlusOutlineIcon: FC<IPencilPlusOutlineIconProps> = memo(props => {
  return <PencilPlusOutlineSvg {...props} />;
});
