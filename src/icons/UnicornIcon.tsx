import React, { FC, memo } from 'react';
import UnicornSvg from '../svg/unicorn.svg';

export interface IUnicornIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UnicornIcon: FC<IUnicornIconProps> = memo(props => {
  return <UnicornSvg {...props} />;
});
