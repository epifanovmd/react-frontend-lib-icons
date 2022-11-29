import React, { FC, memo } from 'react';
import PenRemoveSvg from '../svg/pen-remove.svg';

export interface IPenRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PenRemoveIcon: FC<IPenRemoveIconProps> = memo(props => {
  return <PenRemoveSvg {...props} />;
});
