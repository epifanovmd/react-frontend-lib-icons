import React, { FC, memo } from 'react';
import RedhatSvg from '../svg/redhat.svg';

export interface IRedhatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RedhatIcon: FC<IRedhatIconProps> = memo(props => {
  return <RedhatSvg {...props} />;
});
