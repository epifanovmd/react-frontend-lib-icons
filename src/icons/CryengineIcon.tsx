import React, { FC, memo } from 'react';
import CryengineSvg from '../svg/cryengine.svg';

export interface ICryengineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CryengineIcon: FC<ICryengineIconProps> = memo(props => {
  return <CryengineSvg {...props} />;
});
