import React, { FC, memo } from 'react';
import UmbrellaSvg from '../svg/umbrella.svg';

export interface IUmbrellaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UmbrellaIcon: FC<IUmbrellaIconProps> = memo(props => {
  return <UmbrellaSvg {...props} />;
});
