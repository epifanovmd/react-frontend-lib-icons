import React, { FC, memo } from 'react';
import UpdateSvg from '../svg/update.svg';

export interface IUpdateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UpdateIcon: FC<IUpdateIconProps> = memo(props => {
  return <UpdateSvg {...props} />;
});
