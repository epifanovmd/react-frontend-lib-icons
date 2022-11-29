import React, { FC, memo } from 'react';
import BellRemoveOutlineSvg from '../svg/bell-remove-outline.svg';

export interface IBellRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellRemoveOutlineIcon: FC<IBellRemoveOutlineIconProps> = memo(props => {
  return <BellRemoveOutlineSvg {...props} />;
});
