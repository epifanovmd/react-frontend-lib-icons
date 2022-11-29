import React, { FC, memo } from 'react';
import OpenInNewSvg from '../svg/open-in-new.svg';

export interface IOpenInNewIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OpenInNewIcon: FC<IOpenInNewIconProps> = memo(props => {
  return <OpenInNewSvg {...props} />;
});
