import React, { FC, memo } from 'react';
import BulmaSvg from '../svg/bulma.svg';

export interface IBulmaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BulmaIcon: FC<IBulmaIconProps> = memo(props => {
  return <BulmaSvg {...props} />;
});
