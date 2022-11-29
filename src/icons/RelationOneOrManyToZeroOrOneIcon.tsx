import React, { FC, memo } from 'react';
import RelationOneOrManyToZeroOrOneSvg from '../svg/relation-one-or-many-to-zero-or-one.svg';

export interface IRelationOneOrManyToZeroOrOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOneOrManyToZeroOrOneIcon: FC<IRelationOneOrManyToZeroOrOneIconProps> = memo(props => {
  return <RelationOneOrManyToZeroOrOneSvg {...props} />;
});
