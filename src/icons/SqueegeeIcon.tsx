import React, { FC, memo } from 'react';
import SqueegeeSvg from '../svg/squeegee.svg';

export interface ISqueegeeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SqueegeeIcon: FC<ISqueegeeIconProps> = memo(props => {
  return <SqueegeeSvg {...props} />;
});
