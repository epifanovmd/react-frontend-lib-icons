import React, { FC, memo } from 'react';
import PencilPlusSvg from '../svg/pencil-plus.svg';

export interface IPencilPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilPlusIcon: FC<IPencilPlusIconProps> = memo(props => {
  return <PencilPlusSvg {...props} />;
});
