import React, { FC, memo } from 'react';
import BellRemoveSvg from '../svg/bell-remove.svg';

export interface IBellRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellRemoveIcon: FC<IBellRemoveIconProps> = memo(props => {
  return <BellRemoveSvg {...props} />;
});
