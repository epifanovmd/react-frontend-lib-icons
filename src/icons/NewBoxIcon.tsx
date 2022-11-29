import React, { FC, memo } from 'react';
import NewBoxSvg from '../svg/new-box.svg';

export interface INewBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NewBoxIcon: FC<INewBoxIconProps> = memo(props => {
  return <NewBoxSvg {...props} />;
});
