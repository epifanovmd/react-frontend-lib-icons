import React, { FC, memo } from 'react';
import DonkeySvg from '../svg/donkey.svg';

export interface IDonkeyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DonkeyIcon: FC<IDonkeyIconProps> = memo(props => {
  return <DonkeySvg {...props} />;
});
