import React, { FC, memo } from 'react';
import JquerySvg from '../svg/jquery.svg';

export interface IJqueryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const JqueryIcon: FC<IJqueryIconProps> = memo(props => {
  return <JquerySvg {...props} />;
});
