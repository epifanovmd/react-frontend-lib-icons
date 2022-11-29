import React, { FC, memo } from 'react';
import LeafCircleOutlineSvg from '../svg/leaf-circle-outline.svg';

export interface ILeafCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LeafCircleOutlineIcon: FC<ILeafCircleOutlineIconProps> = memo(props => {
  return <LeafCircleOutlineSvg {...props} />;
});
