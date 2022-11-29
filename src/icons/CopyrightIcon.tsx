import React, { FC, memo } from 'react';
import CopyrightSvg from '../svg/copyright.svg';

export interface ICopyrightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CopyrightIcon: FC<ICopyrightIconProps> = memo(props => {
  return <CopyrightSvg {...props} />;
});
