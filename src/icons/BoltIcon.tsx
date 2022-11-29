import React, { FC, memo } from 'react';
import BoltSvg from '../svg/bolt.svg';

export interface IBoltIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoltIcon: FC<IBoltIconProps> = memo(props => {
  return <BoltSvg {...props} />;
});
