import React, { FC, memo } from 'react';
import RelationManyToZeroOrOneSvg from '../svg/relation-many-to-zero-or-one.svg';

export interface IRelationManyToZeroOrOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationManyToZeroOrOneIcon: FC<IRelationManyToZeroOrOneIconProps> = memo(props => {
  return <RelationManyToZeroOrOneSvg {...props} />;
});
