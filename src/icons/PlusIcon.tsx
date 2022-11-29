import React, { FC, memo } from 'react';
import PlusSvg from '../svg/plus.svg';

export interface IPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusIcon: FC<IPlusIconProps> = memo(props => {
  return <PlusSvg {...props} />;
});
