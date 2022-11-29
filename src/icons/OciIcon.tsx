import React, { FC, memo } from 'react';
import OciSvg from '../svg/oci.svg';

export interface IOciIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OciIcon: FC<IOciIconProps> = memo(props => {
  return <OciSvg {...props} />;
});
