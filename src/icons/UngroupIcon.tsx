import React, { FC, memo } from 'react';
import UngroupSvg from '../svg/ungroup.svg';

export interface IUngroupIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UngroupIcon: FC<IUngroupIconProps> = memo(props => {
  return <UngroupSvg {...props} />;
});
